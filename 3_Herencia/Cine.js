const { Hitler } = require('./documental');
const { Mulan , Spiderman } = require('./pelicula');

// console.log(Hitler);
// console.log(Mulan);
// console.log(Spiderman);

class Cine{
    constructor(nombre, butacas, pantallas, cadena){
        this.nombre = nombre;
        this.butacas = butacas;
        this.pantallas = pantallas;
        this.cadena = cadena;
    }
    reproducirLargometraje(contenido){
        return `Se esta reproduciendo ${contenido.titulo}`
    }
}

const nuevoCine = new Cine('Albacinema', 75, 2, 'Cinemark');
console.log(nuevoCine.reproducirLargometraje(Mulan));
