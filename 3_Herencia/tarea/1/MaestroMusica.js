const { Maestro } = require('./maestro');

class maestroMusica extends Maestro{
    constructor(nombre, notas, edad){
        super(nombre, notas);
        this.edad = `${edad} años`;
    }
    
}

const maestro2 = new maestroMusica('Rosa Salazar',[7,8,5,1,10,5,2,3,5],24);
console.log(maestro2);
console.log(maestro2.calcularPromedio());