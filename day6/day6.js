let frutas = [], laticinios = [], congelados = [], doces = []
let confirma = "S"

function removerItem(categoria_remove) {
    let item_remove = prompt("Qual produto você deseja remover?")

    if (categoria_remove.includes(item_remove)) {
        let index = categoria_remove.indexOf(item_remove)
        categoria_remove.splice(index, 1)
        alert(`Produto removido: ${item_remove}`)
    }
    else {
        alert("Produto não encontrado.")
    }
}

while (confirma == 'S') {
    let add_or_remove = prompt("Você quer adicionar ou remover item? (A - Adicionar / R - Remover)").toUpperCase()

    if (add_or_remove == 'A') {
        let item = prompt('Adicione um item a sua lista de compras:')
        let categoria = prompt(`A qual categoria ele pertence? \n
                                F - Frutas \n
                                L - Laticínios \n
                                C - Congelados \n
                                D - Doces`).toUpperCase()

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
    }
    else {
        let categoria_remove = prompt(`Qual categoria tem o produto que você deseja remover? \n
                                       F - Frutas \n
                                       L - Laticínios \n
                                       C - Congelados \n
                                       D - Doces`).toUpperCase()
        
        if (categoria_remove == 'F') {
            removerItem(frutas)
        } 
        else if (categoria_remove == 'L') {
            removerItem(laticinios)
        }
        else if (categoria_remove == 'C') {
            removerItem(congelados)
        }
        else if (categoria == 'D') {
            removerItem(doces)
        }
    }

    confirma = prompt(`Quer adicionar ou remover mais um item? \n
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