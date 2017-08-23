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
}

Engine.show = function(text, choices, save = true) {
    Engine.addText(text)
    Engine.addBottom(choices)
    gamestate.event = new GameEvent(text, choices)
    if(save)
        GameState.save()
}

Engine.createChoices = function(choices) {
    var ret = ""
    choices.forEach(function(choice) {
        ret += (Choice.create(choice) + "<br/><br/>")
    })
    return ret
}

Engine.addBottom = function(choices) {
    globalChoices = choices
    var e = document.getElementById("center")
    if(choices === undefined) {
        e.innerHTML = ""
    } else if(choices.length > 1) {
        var counter = 0
        choices.forEach(function(choice) {
            counter++
            choice.id = "choice" + counter
        })
        e.innerHTML = Engine.createChoices(choices) 
        choices.forEach(function(choice) {
            Choice.bind(choice)
        })
        e.innerHTML += Engine.createButton("confirm", "Weiter", function() {})
    } else if(choices.length === 1) {
        e.innerHTML = Engine.createButton(choices[0].id, "Weiter", function() {})
    }
}

Engine.createButton = function(id, text, func) {
    return "<input type=\"button\" id=\"" + id + "\", name=\"button\" class=\"btn continue\", onclick=\"Engine.onButton(" + id + ")\", value=\"" + text +  "\" />"
}

Engine.addText = function(text) {
    document.getElementById("text").innerHTML = text
}

Engine.getSelectedChoice = function() {
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

Engine.onButton = function(button) {
    var selectedId = Engine.getSelectedChoice()
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

function GameState() {
    this.event = new GameEvent("", [new Choice("Weiter", "event404")])
}

GameState.save = function() {
    put("gamestate", gamestate)
}
GameState.load = function() {
    gamestate = get("gamestate")
    Engine.show(gamestate.event.text, gamestate.event.choices)
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
    document.getElementById(choice.id).onclick = function(e) { /* alert("hallo" + event.target.id) */ }
}