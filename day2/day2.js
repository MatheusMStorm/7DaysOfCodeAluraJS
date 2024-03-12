const nome = prompt("Qual o seu nome?")
const idade = prompt("Quantos anos você tem?")
const ling_prog = prompt("Qual linguagem de programação você está aprendendo?")

const text_alert = `Nome: ${nome} \n` + `Idade: ${idade} \n` + `Linguagem de programação: ${ling_prog}`

alert(text_alert)

const gosta_de_estudar = prompt(`Você gosta de estudar ${ling_prog}? (1 para SIM e 2 para NÃO)`)

let msg
if (gosta_de_estudar == 1) {
    msg = 'Muito bom! Continue estudando e você terá muito sucesso.'
} else {
    msg = 'Ahh que pena... Já tentou aprender outras linguagens?'
}

alert(msg)