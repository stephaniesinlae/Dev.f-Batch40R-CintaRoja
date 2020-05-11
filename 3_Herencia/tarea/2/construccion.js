class Construccion{
    constructor(nPuertas, nVentanas, nPisos, direccion, altura, largo, ancho){
        this.nPuertas = nPuertas;
        this.nVentanas = nVentanas;
        this.nPisos = nPisos;
        this.direccion = direccion;
        this.altura = altura;
        this.largo = largo;
        this.ancho = ancho;
    }
    getDireccion(){
        return this.direccion;
    }

    setDireccion(direccion){
        this.direccion = direccion;
    }

    metrosCuadrados(){
        return this.ancho * this.largo; 
    }
}

module.exports = {
    Construccion
} 