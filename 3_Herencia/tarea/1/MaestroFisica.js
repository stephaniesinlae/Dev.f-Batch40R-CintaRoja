const { Maestro } = require('./maestro');

class maestroFisica extends Maestro{
    constructor(nombre, notas, antiguedad){
        super(nombre, notas);
        this.antiguedad = `${antiguedad} años de antiguedad`;
    }
    
}

const maestro1 = new maestroFisica('Edgar Soto', [7,8,5,1,10,5,2,3,5],15);
console.log(maestro1);
console.log(maestro1.calcularPromedio());
 