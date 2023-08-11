// soma
function sum(... valores) {
    return valores.reduce((acc, next) => acc + next);
}

console.log(sum(2,4, 6, 8));

// multiplicação
function multi(... valores) {
    return valores.reduce((acc, next) => acc * next)
}

console.log(multi(5, 3))

function sub(... valores) {
    return valores.reduce((acc, next) => acc - next)
}

console.log(sub(5 - 3))