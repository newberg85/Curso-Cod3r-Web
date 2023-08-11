function geraNumerosEntre (min, max) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise (resolve => {
        const fator = max - min +1
        const aleatorio = parseInt(Math.random() *fator) + min 
        resolve(aleatorio)
    })
}

geraNumerosEntre(10, 30)
    .then(num => num)
    .then(numx => `O número gerado foi ${numx}`)
    .then(console.log)