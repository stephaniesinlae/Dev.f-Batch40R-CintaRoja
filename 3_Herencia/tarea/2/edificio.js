const { Construccion } = require('./construccion');

class edificio extends Construccion{
    constructor(nPuertas, nVentanas, nPisos, direccion, altura, largo, ancho){
        super(nPuertas, nVentanas, nPisos, direccion, altura, largo, ancho);
    }
    
}
const edificio1 = new edificio(150, 200, 10, 'Cayala',500, 300, 800);
console.log(edificio1.getDireccion());
edificio1.setDireccion('Guatemala City');
console.log(edificio1.getDireccion());
console.log(edificio1.metrosCuadrados());
 