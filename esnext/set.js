// Não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('Flamengo').add('Palmeiras').add('Corinthians')
times.add('São paulo')
times.add('Vasco')// Vai ser ignorado

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))

const nomes = ['Berg', 'Rayssa', 'Ana', 'Berg']
const setNomes = new Set(nomes)
console.log(setNomes)