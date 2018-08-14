"use strict";

var gamestate;

"use strict";

var put = function put(name, value) {
    if (typeof Storage !== "undefined") {
        var valueS = JSON.stringify(value);
        localStorage.setItem(name, valueS);
        console.log("setting var named " + name + " to " + valueS);
    } else {
        throw "Sorry, your browser does not support Web Storage...";
    }
};

var get = function get(name) {
    return getVar(name, undefined);
};

var get = function get(name, defaultValue) {
    var value = JSON.parse(localStorage.getItem(name));
    return value === undefined ? defaultValue : value;
};

function Gui() {}

Gui.createButton = function (id, text, onclick) {
    var clazz = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "btn";
    var append = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    var iconClazz = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

    var elementIcon = document.createElement("svg");
    elementIcon.className = "btnicon";
    if (iconClazz !== null) elementIcon.className = "btnicon " + iconClazz;else elementIcon.className = "btnicon";

    var elementBreapCrump = document.createElement("span");
    elementBreapCrump.className = "btnbreadcrump";

    var elementText = document.createElement("div");
    elementText.innerText = text;
    elementText.className = "btntext";
    var element = document.createElement("div");
    element.type = "button";
    element.id = id;
    element.className = clazz;
    var addIcon = iconClazz !== null;
    var addText = text !== null && text !== undefined && text !== "";
    if (addIcon && addText) {
        element.appendChild(elementIcon);
        element.appendChild(elementBreapCrump);
        element.appendChild(elementText);
    } else if (addIcon) {
        element.appendChild(elementIcon);
    } else if (addText) {
        element.appendChild(elementText);
    } else {
        console.error("this should not happen");
    }
    return element;
};

Gui.createBreadCrump = function (id) {
    var element = document.createElement("span");
    element.id = id;
    element.className = "breadcrump";
    return element;
};

Gui.createRadioButton = function (id, name, text) {
    var element = document.createElement("label");
    element.id = id + "label";

    element.setAttribute("for", id);
    var elementInput = document.createElement("input");

    elementInput.id = id;
    elementInput.type = "radio";
    elementInput.name = name;

    var elementText = document.createTextNode(text);

    element.appendChild(elementInput);
    element.appendChild(elementText);

    Gui.resetAnimation(element, "fadeInAnim");
    return element;
};

Gui.insertLineBreak = function (e) {
    var element = document.createElement("br");
    e.appendChild(element);
};

Gui.resetAnimation = function (node, classname) {
    node.classList.remove(classname);

    // -> triggering reflow /* The actual magic */
    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
    // Oops! This won't work in strict mode. Thanks Felis Phasma!
    // element.offsetWidth = element.offsetWidth;
    // Do this instead:
    void node.offsetWidth;

    // -> and re-adding the class
    node.classList.add(classname);

    //node.style.animation = 'none'
    //node.offsetHeight /* trigger reflow */
    //node.style.animation = null
};

function Engine(customState) {
    gamestate = customState;
    var _root = this;
    this.globalChoices;

    var appendText = function appendText(text) {
        document.getElementById("text").innerHTML += text;
    };

    var clearText = function clearText() {
        addText("");
    };

    createChoices = function createChoices(e, choices) {
        choices.forEach(function (choice) {
            e.appendChild(createRadioButtonChoice(choice));
            Gui.insertLineBreak(e);
            Gui.insertLineBreak(e);
        });
    };

    createRadioButtonChoice = function createRadioButtonChoice(choice) {
        return Gui.createRadioButton(choice.id, "choice", choice.text);
    };

    addBottom = function addBottom(choices) {
        globalChoices = choices;
        var e = document.getElementById("center");
        e.innerHTML = "";
        if (choices === undefined) {
            return;
        } else if (choices.length > 1) {
            var counter = 0;
            choices.forEach(function (choice) {
                counter++;
                choice.id = "choice" + counter;
            });
            createChoices(e, choices);
            choices.forEach(function (choice) {
                Choice.bind(choice);
            });
        }
        // add confirm button
        var continueId = choices.length === 1 ? "confirm" : choices[0].id;
        var continueText = choices.length === 1 ? choices[0].text : "Weiter";
        var continueAppend = choices.length !== 1;
        var buttonContinue = Gui.createButton("confirm", continueText, function () {
            onButtonContinue(continueId);
        }, "btn continue", continueAppend);
        e.appendChild(buttonContinue);
        buttonContinue.addEventListener("click", onButtonContinue, false);

        // breadcrump
        var breadcrump = Gui.createBreadCrump("breadcrump1");
        e.appendChild(breadcrump);

        //  status button
        var buttonStatus = Gui.createButton("status", "", onButtonStatus, "btn", false, "iconstate");
        var popup = document.createElement("div");
        popup.className = "popup";

        //  popup to status button
        var status = document.getElementById("status");

        // popup fullscreen container
        var popupcontainer = document.createElement("span");
        popupcontainer.id = "popupcontainer";
        popupcontainer.className = "popupcontainer";

        // popupbox centered within the screen
        var popupbox = document.createElement("div");
        popupbox.id = "popupbox";
        popupbox.className = "popupbox";

        popupcontainer.appendChild(popupbox);

        popup.appendChild(popupcontainer);

        var popupElement = document.getElementById("popup");
        popupElement.innerHTML = '';
        popupElement.appendChild(popup);

        e.appendChild(buttonStatus);

        buttonStatus.addEventListener("click", onButtonStatus, false);
        popupcontainer.addEventListener("click", onButtonStatus, false);
    };

    getStatusText = function getStatusText() {
        var statusText = "";
        for (var propertyName in gamestate) {
            var propertyValue = gamestate[propertyName];
            if (propertyValue != undefined && propertyValue["type"] === "PlayerAttribute") {
                if (propertyValue.visible) statusText += "<b>" + propertyValue.name + ":</b> " + propertyValue.value + "<br/>";
            }
        }
        return statusText;
    };

    addText = function addText(text) {
        // this will reanimate the text, when a new one is inserted
        var element = document.getElementById("text");
        element.innerHTML = text;
        Gui.resetAnimation(element, "fadeInAnim");
    };

    getSelectedChoice = function getSelectedChoice() {
        var selectedId = undefined;
        if (globalChoices.length > 1) {
            var choices = document.getElementsByName("choice");
            choices.forEach(function (choice) {
                if (choice.checked) {
                    selectedId = choice.id;
                }
            });
        } else if (globalChoices.length === 1) {
            selectedId = globalChoices[0].id;
        }
        return selectedId;
    };

    onButtonContinue = function onButtonContinue() {
        this.root = _root;
        var selectedId = getSelectedChoice();
        var selectedChoice = void 0;
        globalChoices.forEach(function (choice) {
            if (choice.id === selectedId) {
                selectedChoice = choice;
            }
        });
        if (selectedChoice === undefined) {
            // nothing selected
            return;
        }
        if (window[selectedChoice.func] === undefined) {
            console.log(selectedChoice.text + " (" + selectedChoice.func + ") function does not exist.");
            this.root.show("ERROR: The function '" + selectedChoice.func + "' does not exist!", [new Choice("Retry", selectedChoice.func)], true);
        } else if (selectedChoice !== undefined) {
            console.log(selectedChoice.text + " (" + selectedChoice.func + ") was selected.");
            window[selectedChoice.func](arguments);
            window.scrollTo(0, 0);
        }
    };

    onButtonStatus = function onButtonStatus() {
        toggleStatus();
    };

    toggleStatus = function toggleStatus() {
        var popup = document.getElementById("popupcontainer");
        var popupbox = document.getElementById("popupbox");
        popupbox.innerHTML = getStatusText();
        popup.classList.toggle("show");
        Gui.resetAnimation(popup, "fadeInAnim");
    };

    closeStatus = function closeStatus() {
        var popup = document.getElementById("popupcontainer");
        popup.classList.remove("show");
    };

    this.setBackground = function (color, filename) {

        if (filename === undefined || filename === null) {
            document.body.style.background = "";
        } else {
            if (color === undefined || color === null) color = "#fff";
            document.body.style.background = color + " url('" + filename + "') no-repeat center top";
            document.body.style.backgroundSize = "auto 100%";
            document.body.style.backgroundAttachment = "fixed";
        }
    };

    this.show = function (text, choices) {
        var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        addText(text);
        addBottom(choices);
        gamestate.event = new GameEvent(text, choices);
        closeStatus();
        if (save) GameState.save();
    };

    this.getRnd = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    this.log = function (message) {
        console.show(message);
    };
}

function GameState() {
    this.event = new GameEvent("");
}

function PlayerAttribute(name, value) {
    var visible = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    this.type = "PlayerAttribute";
    this.name = name;
    this.value = value;
    this.visible = visible;
}

GameState.hasSave = function () {
    var saveData = get("gamestate");
    return saveData !== undefined && saveData !== null;
};

GameState.save = function () {
    put("gamestate", gamestate);
};

GameState.load = function (engine) {
    // we merge the objects to be more compatible to old save states
    var saveData = get("gamestate");
    console.log("savedata contains: " + JSON.stringify(saveData));
    gamestate = mergeRecursive(new State(), saveData);
    state = gamestate;
    console.log("merged savedata contains: " + JSON.stringify(gamestate));
    engine.show(gamestate.event.text, gamestate.event.choices);
};

function GameEvent(text, choices) {
    this.text = text;
    this.choices = choices;
}

function Choice(text, func) {
    this.id = "choice0";
    this.text = text;
    this.func = func;
}

/**
 * Recursively merge properties of two objects 
 */
function mergeRecursive(obj1, obj2) {
    for (var p in obj2) {
        try {
            // Property in destination object set; update its value.
            if (obj2[p].constructor == Object) {
                obj1[p] = mergeRecursive(obj1[p], obj2[p]);
            } else {
                obj1[p] = obj2[p];
            }
        } catch (e) {
            // Property in destination object not set; create it and set its value.
            obj1[p] = obj2[p];
        }
    }
    return obj1;
}
