//-----------------1------------------
const myPenguin = {
    character: 'Pokey the Penguin',
    origin: 'Pokey the Penguin',
    creator: 'Steve Havelka',
    notes: ' ... '
}
//-----------------2------------------
console.log(`\nHola, soy un pinguino y me llamo ${myPenguin.character}, mi origen es ${myPenguin.origin} y 
mi creador se llama ${myPenguin.creator}.`);

//-----------------3------------------
//atributo - propiedad
myPenguin.puedeVolar= false;

//-----------------4------------------
//metodos - funciones
//arrow funtion
myPenguin.graznar = () => console.log('\nKaww Kaww!!\n');
myPenguin.graznar();

//-----------------5------------------
//funcion antigua
myPenguin.saludar = function(){ 
    console.log(`Hola, soy un pinguino y me llamo ${this.character}, mi origen es ${this.origin} y 
mi creador se llama ${this.creator}.`)
};

//-----------------6------------------
//Modificar atributo
myPenguin.character = "Señor Pingu";
myPenguin.saludar();

//-----------------7------------------
//Metodo - funciones
myPenguin.volar = function(){
    if(this.puedeVolar === true){
        console.log('\nPuedo Volar!')
    }else{
        console.log('\nNo puedo volar :(')
    };
}

//-----------------8------------------
//Modificar atributo
myPenguin.puedeVolar = true;
myPenguin.volar();


console.log(myPenguin);




