class Maestro{
    constructor(nombre, notas){
        this.nombre = nombre;
        this.notas = notas;
    }
    calcularPromedio(){
        let sumaTotal = 0;
        for(let i=0; i<this.notas.length; i++){
            sumaTotal += this.notas[i];
        }        
        return sumaTotal/this.notas.length;
    }
}

module.exports = {
    Maestro
} 