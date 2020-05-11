class Electrodomestico {
    constructor(precio, color, capacidad){
        this.precio = precio;
        this.color = color;
        this.capacidad = capacidad;
        this.consumoEnergetico = 100;
    }

    getConsumoEnergetico(){
        return this.consumoEnergetico;
    }

    // setConsumoEnergetico(precio){
    //     this.consumoEnergetico = precio;
    // }
}

module.exports = {
    Electrodomestico
}