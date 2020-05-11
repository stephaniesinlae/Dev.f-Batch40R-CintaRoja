const { Construccion } = require('./construccion');

class casa extends Construccion{
    constructor(nPuertas, nVentanas, nPisos, direccion, altura, largo, ancho){
        super(nPuertas, nVentanas, nPisos, direccion, altura, largo, ancho);
    }
    
}
const home1 = new casa(15, 20, 3, 'Barrio Nuevo',180, 50,60);
console.log(home1.getDireccion());
home1.setDireccion('Esquipulas, Chiquimula');
console.log(home1.getDireccion());
console.log(home1.metrosCuadrados());
 