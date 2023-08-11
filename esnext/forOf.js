//forIn opera em cima do indice, forOf opera em cima dos valores

for (let letra of "Cod3r") {
    console.log(letra)
}// percorre o valor

const asssuntosEcma = ['Map', 'Set', 'Promise']

for ( let i in asssuntosEcma) {
    console.log(i)
}// percorre o indice

for (let assunto of asssuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for(let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for(let letras of s) {
    console.log(letras)
}