const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

//foreach pega primeiro a chave depois o valor

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))// has diz se o elemto está ou não contido dentro desse map
chavesVariadas.delete(123)
console.log(chavesVariadas.size)// diz quantos elementos estão presentes dentro do map