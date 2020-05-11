const { Largometraje } = require('./largometraje');

// const prueba = new Largometraje();

class Pelicula extends Largometraje{
    constructor(titulo, duracion, director, cast, tema){
        super(titulo, duracion, director);
        this.cast = cast;
        this.tema = tema;
        this.precio = '$3';
    }
}

const Mulan = new Pelicula('Mulan','160','Tony Bancroft y Barry Cook',['Mulan, Mushu'],'Animada/Infantil');
console.log(Mulan);

const Spiderman = new Pelicula('Spiderman','100','Desconodido',['Spiderman, Tia May'],'accion');
console.log(Spiderman);

module.exports = {
    Mulan, Spiderman
}