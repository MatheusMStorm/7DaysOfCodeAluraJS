let front_or_back
let react_vue, cs_java
let chosen_or_fullstack
let others, confirm = "OK"

front_or_back = prompt("Em qual área você deseja seguir? \n 1 - Front-End \n 2 - Back-end")

if (front_or_back == 1) {
    alert("Escolhido: Front-End")
    react_vue = prompt("O que você deseja aprender? \n 1 - React \n 2 - Vue.js")

    chosen_or_fullstack = prompt("Você deseja trabalhar na área de front-end ou quer seguir para full-stack? (1 - SIM, 2 - FULL-STACK)")

    if (chosen_or_fullstack == 1) {
        alert("Você escolheu trabalhar com front-end.")
    }
    else {
        alert("Você escolheu trabalhar com full-stack.")
    }
}
else {
    alert("Escolhido: Back-End")
    cs_java = prompt("O que você deseja aprender \n 1 - C# \n 2 - Java")

    chosen_or_fullstack = prompt("Você deseja trabalhar na área de back-end ou quer seguir para full-stack? (1 - SIM, 2 - FULL-STACK)")
    
    if (chosen_or_fullstack == 1) {
        alert("Você escolheu trabalhar com back-end.")
    }
    else {
        alert("Você escolheu trabalhar com full-stack.")
    }
}

while (confirm == "OK") {
    others = prompt("Quais outras tecnologias você quer aprender?")

    confirm = prompt("Tem outras tecnologias que você gostaria de aprender? (Digite OK no caso positivo)").toUpperCase()

    if (confirm != "OK") {
        alert("GAME OVER")
    }
}