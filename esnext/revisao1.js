//implementada na versão es6 let e const
// var tem dois escopos, escopo de função ou global
//let tem escopo de bloco

{
    var a = 2 
    let b = 3
    //assim poderá imprimir o let
    console.log(b)
}
console.log(a)
//console.log(b) erro


// Template String
const produto = 'Ipad'
console.log(`${produto} é caro!`)

//Destructuring

// Destruct string
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

//Destruct array
const [x, y] = [1, 2, 3]
console.log(x, y)

//Destruct object
const { idade: i, nome } = {nome: 'Ana', idade: 9}
console.log(i, nome)