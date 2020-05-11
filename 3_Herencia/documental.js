const { Largometraje } = require('./largometraje');

// const prueba = new Largometraje();

class Documental extends Largometraje{
    constructor(titulo, duracion, director, patrocinador, productor){
        super(titulo, duracion, director);
        this.patrocinador = patrocinador;
        this.productor = productor;
        this.precio = '$5';
    }
}

const Hitler = new Documental('Hitler','60','Desconocido','History Channel','Sony');
console.log(Hitler);

module.exports = {
    Hitler
}