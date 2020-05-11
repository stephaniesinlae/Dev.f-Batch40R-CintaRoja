class Cuenta{
    constructor(titular, cantidad, estado){
        this.titular = titular;
        this.cantidad = cantidad;
        this.estado = estado;
    }

    //metodos
    ingresar(valor1){
        //Valida si la cantidad que se tiene es menor a 900
        if(this.cantidad <900){
                let ahorro = this.cantidad + valor1;
                //valida si al momento de hacer el ingreso, la cantidad no supera los 900
                if(ahorro <=900){
                    this.cantidad = ahorro;
                    return `Ahorro con exito, Su nuevo saldo es ${this.cantidad}`;
                //al hacer el ingreso la cantidad supera los 900    
                }else{
                    return `A alcanzado el limite de Ahorro, su cuenta no puede ser mayor a $900 y usted desea ahorrar ${valor1}`;
                }
            //Cantidad en el limite    
            }else{
            return`No puede hacer un ingreso porque usted ya supera el limite de ahorro de $900`;
        }
    }

    retirar(valor2) {
        //Valida si la cuenta esta activa.
        if(this.estado == true){
            //Validacion si lo que se quiere retirar no supera a la cantidad que se tiene.
            if(this.cantidad>=valor2){
                let ahorro = this.cantidad - valor2;
                //Validacion si la operacion del retiro no es menor a $10.
                if(ahorro >=10){
                    this.cantidad = ahorro;
                    return `Retiro con exito, Su nuevo saldo es ${this.cantidad}`;
                //La operacion del retiro es menor a $10
                }else{
                    return `Error, su cantidad no puede ser menor a $10, su saldo actual es de ${this.cantidad} y usted desea retirar ${valor2}`;
                }
            //Lo que se desea retirar es mayor a lo que se tiene en la cuenta.
            }else{
                return `Lo que desea retirar es mayor a la cantidad ahorrada, su saldo actual es de ${this.cantidad} y usted desea retirar ${valor2}`;
            }
         //Validacion de cuenta inactiva.   
        }else{
            return `Cuenta inactiva, pongase en contacto con su asistente de banco para poder hacer una transaccion.`;
        }
    }
}
//Instancia de la clase cuenta
let persona = new Cuenta('Stephanie', 900, true);

console.log(persona.ingresar(1));
console.log(persona.retirar(60));