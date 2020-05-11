//Json
//JavaScript
//Object
//Notation
var auto = {
    //Atributos - Que tiene
    color: "Rojo",
    velocidad: 180,
    ruedas: 4,
    motor:"V10",
    deportivo: true,
    //Metodos - Que hace
    arranca: function(){
        alert("🚗 El auto Arranca"); },
    frena: function(){
        alert("🚗 El Auto Frena"); },
    dobla: function(){
            alert("🚗 El Auto ha frenado"); }

}
console.log(auto);
console.log(auto.color);
console.log(auto.ruedas);

var perro = {
    nombre: "Ayudante de santa",
    raza: "Galgo",
    color: "Marron",
    //Metodos - Que hace
    ladrar: function(){
        alert(this.nombre + " ladra"); },
    ladrar: function(){
        alert(this.nombre + " ladra"); },
}


console.log(perro);
perro.ladrar();
auto.dobla();