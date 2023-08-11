let p = new Promise(function(resolve) {
    resolve(['Berg', 'Paulo', 'Rayssa', 'Pedro'])
})

const primeiroElemento = (array => array[0])

p
    .then(primeiroElemento)
    .then(primeiro => primeiro[0])
    .then(valor => console.log(valor))