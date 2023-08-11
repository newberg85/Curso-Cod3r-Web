//se cria uma promessa instanciando a classe promise
//ela leva dois argumentos, resolve e reject
//para encadear mais processos se utiliza o metodo then


function falarDepois(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000);
    })
}

falarDepois(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))