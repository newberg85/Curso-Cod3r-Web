function geraNumerosEntre (min, max, numerosProibidos) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise ((resolve, reject) => {
        const fator = max - min +1
        const aleatorio = parseInt(Math.random() *fator) + min 
        if(numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegacena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await geraNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if(tentativas > 4) {
            throw "Que chato!!"
        } else {
            return gerarMegacena(qtdeNumeros, tentativas = 1)
        }
    }
}

gerarMegacena(40)
    .then(console.log)
    .catch(console.log)