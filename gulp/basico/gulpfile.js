const gulp = require('gulp')
const { series, parallel } = require('gulp')

function copiar(cb) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
        // .pipe(imagePelaMetade())
        // .pipe(imageEmPretoEBranco())
    return cb()
}

const fim = cb => {
    console.log('Tarefa antes Fim!')
    return cb()
}

module.exports.default = series(
    copiar,
    fim
)