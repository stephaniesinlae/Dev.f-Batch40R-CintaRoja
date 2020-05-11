//Palabras reservadas => palabra exclusiva del lenguaje, (let, const, if, for, var)

//Vamos a declarar una clase
class perro {
    //Metodo constructor
    constructor(raza, tamano, nombre){
        // console.log('Se ejecuta el constructor');
        this.raza = raza;
        this.tamano = tamano;
        this.nombre = nombre;
    }

    comer(comida){
        //Colocar comparaciones estrictas
        if(comida === 'croquetas'){
            return 'ztoy bien feliz'
        }else{
            return 'estoy bien triste'
        }
    }

    saludo(){
        return `Hola mi nombre es ${this.nombre}`;
    }

    getNombre(){
        return this.nombre;
    }

    getRaza(){
        return this.raza;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }
}

//Instancia de mi clase perro
const snoopy = new perro('Beagle','chiquito','Snoopy');
const scooby = new perro('Gran Danes', 'Grande', 'Scooby');
console.log(snoopy);
console.log(scooby);
console.log(snoopy.saludo());
console.log(scooby.comer('tacos'));