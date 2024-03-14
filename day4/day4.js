// Randomizando o número misterioso
const numero_misterioso = Math.floor(Math.random() * (10 - 0 + 1) + 0)

for (let i = 1; i <= 3; i++) {
    let palpite = prompt(`Tentativa ${i}: Descubra o número misterioso!`)

    if (palpite != numero_misterioso) {
        if (i == 3) {
            alert(`Que pena! Você não conseguiu acertar. Resposta correta: ${numero_misterioso}`)
        }
        else {
            alert("Número errado! Tente novamente!")
        }
    }
    else {
        alert("Acertou! Parabéns!")
        break
    }
}