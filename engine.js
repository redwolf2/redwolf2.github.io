var globalChoices

var createChoices = function(choices) {
    var ret = ""
    choices.forEach(function(choice) {
        ret += (choice.create() + "<br/><br/>")
    })
    return ret;
}

var createButton = function(id, text, func) {
    return "<input type=\"button\" id=\"" + id + "\", name=\"button\" class=\"btn continue\", onclick=\"onButton(" + id + ")\", value=\"" + text +  "\" />"
}

var addText = function(text) {
    document.getElementById("text").innerHTML = text;
}

var appendText = function(text) {
    document.getElementById("text").innerHTML += text;
}

var clearText = function() {
    addText("")
}

var addBottom = function(choices) {
    globalChoices = choices
    var e = document.getElementById("center")
    if(choices === undefined) {
        e.innerHTML = ""
    } else if(choices.length > 1) {
        var counter = 0;
        choices.forEach(function(choice) {
            counter++;
            choice.id = "choice" + counter
        })
        e.innerHTML = createChoices(choices) 
        choices.forEach(function(choice) {
            choice.bind()
        })
        e.innerHTML += createButton("confirm", "Weiter", function() {})
    } else if(choices.length === 1) {
        e.innerHTML = createButton(choices[0].id, "Weiter", function() {})
    }
}

var put = function(name, value) {
    if (typeof(Storage) !== "undefined") {
        var valueS = JSON.stringify(value)
        localStorage.setItem(name, valueS);
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
    return Math.floor(Math.random() * (max - min) ) + min;
}

var getSelectedChoice = function() {
    var selectedId = undefined
    if(globalChoices.length > 1) {
        var choices = document.getElementsByName("choice")
        choices.forEach(function(choice) {
            if(choice.checked) {
                selectedId = choice.id;
            }
        })
    } else if(globalChoices.length === 1) {
        selectedId = globalChoices[0].id
    }
    return selectedId;
}

var onButton = function(button) {
    var selectedId = getSelectedChoice()
    var selectedChoice
    globalChoices.forEach(function(choice) {
        if(choice.id === selectedId) {
            selectedChoice = choice
        }
    })
    if(selectedChoice != undefined) {
        console.log(selectedChoice.text + " was selected.")
        selectedChoice.func()
        window.scrollTo(0, 0);
    }
}

function Choice(text, func) {
    this.id = "choice0"
    this.text = text
    this.func = func
    
    this.create = function() {
        return "<label id=\"" + this.id + "label\" for=\"" + this.id + "\"><input type=\"radio\" id=\"" + this.id + "\", name=\"choice\" />" + this.text + "</label>"
    }
    this.bind = function() {
        document.getElementById(this.id).onclick = function(event) { /* alert("hallo" + event.target.id) */ }
    }
}