let frutas = [], laticinios = [], congelados = [], doces = []

let confirma = "S"
const prompt_categoria = `A qual categoria ele pertence? \n
                          F - Frutas \n
                          L - Laticínios \n
                          C - Congelados \n
                          D - Doces`

while (confirma == 'S') {
    let item = prompt('Adicione um item a sua lista de compras:')
    let categoria = prompt(prompt_categoria).toUpperCase()

    if (categoria == 'F') {
        frutas.unshift(item)
    } 
    else if (categoria == 'L') {
        laticinios.unshift(item)
    }
    else if (categoria == 'C') {
        congelados.unshift(item)
    }
    else if (categoria == 'D') {
        doces.unshift(item)
    }

    confirma = prompt(`Quer adicionar mais um item? \n
                      S - Sim \n
                      N - Não`).toUpperCase()
    
    if (confirma == 'N') {
        alert("Lista finalizada.")
    }
    
    if (confirma != 'S' && confirma != 'N') {
        alert('Insira uma opção válida.')
    }
}

let liFruta = document.querySelector("li#fruta")
let liLaticinio = document.querySelector("li#laticinio")
let liCongelado = document.querySelector("li#congelado")
let liDoce = document.querySelector("li#doce")

liFruta.innerHTML = "Frutas: " + frutas
liLaticinio.innerHTML = "Laticínios: " + laticinios
liCongelado.innerHTML = "Congelados: " + congelados
liDoce.innerHTML = "Doces: " + doces