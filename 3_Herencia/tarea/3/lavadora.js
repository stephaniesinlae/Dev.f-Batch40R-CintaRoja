const { Electrodomestico } = require('./electrodomesticos');

class Lavadora extends Electrodomestico {
    constructor(precio, color, capacidad, carga){
        super(precio, color, capacidad);
        this.carga = carga;
    }

    precioFinal(){
       return `El precio final es de Q.${this.getConsumoEnergetico() * this.carga}`
    }
}

const lav1 = new Lavadora(5000, 'negra', 150, 60);
// lav1.setConsumoEnergetico(100);
console.log(lav1.precioFinal());
