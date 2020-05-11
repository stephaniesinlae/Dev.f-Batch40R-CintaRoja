//JS
var nombre = 'Stephanie';
var edad = 23;

//JS ES6
let x = 5;            // Es permitido cambiar el valor
const y = 3.1416;    // No es permitido reemplazar su valor

//Node.js v12.16.3 vs LTS Long Terminal Suport
console.log('Hola mi nombre es ' + nombre);

//concatena las comillas `` 
console.log(`Hola mi nombre es ${nombre} y mi edad es ${edad}`);

//manera de declarar una funcion antigua
function MiFuncion(){
    return "Mi funcion se ejecuto";
}
var valor = MiFuncion();
console.log(valor);

//manera de declarar una funcion moderna
//Arrow Functions

const suma = (a,b) =>{
return a+b
}
const resultado = suma(5,9);
console.log(resultado);

let array = [1, 2, 3, 4, 5];
for(let i = 0; i< array.length; i++){
    console.log(`Array en el indice ${i} = ${array[i]}`);
}

//Propiedades => llave: valor (string, numero, booelano, arreglos, objetos)
//Metodo => Acciones que peude hacer nuestro objeto
let computadora = { 
    color: "plateada",
    marca: "HP",
    encendida: true,

    //Metodo
    //Scope => El alcance de una variable
    obtenerInfo: function(){ 
        return `Esta computadora es color ${this.color}, marca ${this.marca}`},
}
console.log(computadora.obtenerInfo());
