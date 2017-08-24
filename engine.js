var gamestate

var put = function(name, value) {
    if (typeof(Storage) !== "undefined") {
        var valueS = JSON.stringify(value)
        localStorage.setItem(name, valueS)
        console.log("setting var named " + name + " to " + valueS)
    } else {
        throw "Sorry, your browser does not support Web Storage..."
    }
}

var get = function(name) {
    return getVar(name, undefined)
}

var get = function(name, defaultValue) {
    var value = JSON.parse(localStorage.getItem(name))
    return value === undefined ? defaultValue : value
}

function getRnd(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min
}

function Engine(customState)
{
    gamestate = customState
    this.globalChoices

    var appendText = function(text) {
        document.getElementById("text").innerHTML += text
    }

    var clearText = function() {
        addText("")
    }

    createChoices = function(choices) {
        var ret = ""
        choices.forEach(function(choice) {
            ret += (Choice.create(choice) + "<br/><br/>")
        })
        return ret
    }

    addBottom = function(choices) {
        globalChoices = choices
        var e = document.getElementById("center")
        if(choices === undefined) {
            e.innerHTML = ""
            return;
        } else if(choices.length > 1) {
            var counter = 0
            choices.forEach(function(choice) {
                counter++
                choice.id = "choice" + counter
            })
            e.innerHTML = createChoices(choices) 
            choices.forEach(function(choice) {
                Choice.bind(choice)
            })
        }
        var id = choices.length === 1 ? "confirm" : choices[0].id
        var text = choices.length === 1 ? choices[0].text : "Weiter"
        var append = choices.length !== 1
        insertButton(e, "confirm", text, function() { onButton("" + id) }, "btn continue", append)
    }

    insertButton = function(e, id, text, onclick, clazz = "btn", append = true) {
        var buttonHtml = "<input type=\"button\" id=\"" + id + "\", name=\"button\" class=\"" + clazz + "\", value=\"" + text +  "\" />"
        if(append)
            e.innerHTML += buttonHtml
        else
            e.innerHTML = buttonHtml
        document.getElementById(id).onclick = function(id) { onclick(id) }
    }

    addText = function(text) {
        document.getElementById("text").innerHTML = text
    }

    getSelectedChoice = function() {
        var selectedId = undefined
        if(globalChoices.length > 1) {
            var choices = document.getElementsByName("choice")
            choices.forEach(function(choice) {
                if(choice.checked) {
                    selectedId = choice.id
                }
            })
        } else if(globalChoices.length === 1) {
            selectedId = globalChoices[0].id
        }
        return selectedId
    }

    onButton = function(button) {
        var selectedId = getSelectedChoice()
        var selectedChoice
        globalChoices.forEach(function(choice) {
            if(choice.id === selectedId) {
                selectedChoice = choice
            }
        })
        if(selectedChoice != undefined) {
            console.log(selectedChoice.text + " was selected.")
            window[selectedChoice.func](arguments)
            window.scrollTo(0, 0)
        }
    }
    this.show = function(text, choices, save = true) {
        addText(text)
        addBottom(choices)
        gamestate.event = new GameEvent(text, choices)
        if(save)
            GameState.save()
    }
}

function GameState() {
    this.event = new GameEvent("", [new Choice("Weiter", "event404")])
}

function PlayerAttribute(name, value) {
    this.name = name
    this.value = value
    this.visible = true
}

GameState.save = function() {
    put("gamestate", gamestate)
}
GameState.load = function(engine) {
    gamestate = get("gamestate")
    engine.show(gamestate.event.text, gamestate.event.choices)
}

function GameEvent(text, choices) {
    this.text = text
    this.choices = choices
}

function Choice(text, func) {
    this.id = "choice0"
    this.text = text
    this.func = func
}

Choice.create = function(choice) {
    return "<label id=\"" + choice.id + "label\" for=\"" + choice.id + "\"><input type=\"radio\" id=\"" + choice.id + "\", name=\"choice\" />" + choice.text + "</label>"
}

Choice.bind = function(choice) {
    //document.getElementById(choice.id).onclick = function(e) { /* alert("hallo" + event.target.id) */ }
}
