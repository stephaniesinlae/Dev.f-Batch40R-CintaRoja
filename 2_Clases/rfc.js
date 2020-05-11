class Persona {
    //Metodo constructor
    constructor(nombre, apaterno, amaterno, edad, diaNacimiento, mesNacimiento, aNacimiento, sexo, peso, altura){
        // console.log('Se ejecuta el constructor');
        this.nombre = nombre;
        this.apaterno = apaterno;
        this.amaterno = amaterno;
        this.edad = edad;
        this.diaNacimiento = diaNacimiento;
        this.mesNacimiento = mesNacimiento;
        this.aNacimiento = aNacimiento;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    //metodos
    esMayorDeEdad(){
        //Colocar comparaciones estrictas
        if(this.edad >= 18){
            return 'Es mayor de edad';
        }else{
            return 'Es menor de edad';
        }
    }

    calcularIMC(){
        const IMC = Math.round(this.peso/(Math.pow(this.altura,2)));
        return `Mi IMC es ${IMC}`;
    }

    generarRFC() {
        const ap = this.apaterno.toUpperCase();
        const am = this.amaterno;
        const n = this.nombre;
        const an = this.aNacimiento.toString();
        const mn = this.mesNacimiento.lenght > 1
        ? this.mesNacimiento
        : `0${this.mesNacimiento}`;
        return `Mi código RFC es: ${ap.substr(0, 2)}${am.substr(0, 1)}${n.substr(0, 1)}${an.substr(2, 3)}${mn}${this.diaNacimiento}`;
    }
}
let person = new Persona('Stephanie','Sandoval','Almengor',23, 11, 08, 1996, 'M', 60, 1.63);
console.log(person.esMayorDeEdad());
console.log(person.calcularIMC());
console.log(person.generarRFC());
