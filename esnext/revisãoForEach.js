//forEach array simples

//primeiro parâmetro do forEach percorre o array por completo
//Segundo parâmetro é o indice(numero) da posição de cada array
// o ultimo parametro pode ser passado para dentro de um variavel, o array completo

// let pessoas = ['joão', 'Maria', 'Jose']
// pessoas.forEach((valorAtual, indice, arrayCompleto) => {
//     console.log(valorAtual, indice, arrayCompleto)
// })


let produtos = [
    {
        nomeProduto: 'Celular',
        valorProduto: 1200.00,
        porcentagemDesconto: 0.20
    },
    {
        nomeProduto: 'Notebook',
        valorProduto: 2500.00,
        porcentagemDesconto: 0.30
    },
    {
        nomeProduto: 'TV',
        valorProduto: 3600.00,
        porcentagemDesconto: 0.35
    }
];

produtos.forEach((produtoAtual ) => {
    let valorDoDesconto = produtoAtual.valorProduto * produtoAtual.porcentagemDesconto;
    let valorFinal = produtoAtual.valorProduto - valorDoDesconto;
    produtoAtual.valorFinal = valorFinal;
    console.log(produtoAtual)
})