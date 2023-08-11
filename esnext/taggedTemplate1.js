// tagged templates - processar o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Berg'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)