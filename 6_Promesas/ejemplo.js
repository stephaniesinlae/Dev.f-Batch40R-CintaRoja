// Promesas (3)
// Promesa => Pending (Esperar al dia del cumple)
// Promesa => resolve(el telefono)
// Promesa => rejected (razon)

//Callbacks

//Determinar si un numero es mayor a 5
const promesa = new Promise((resolve, reject) => {
    const numero = Math.floor(Math.random()*10);
    setTimeout(() => {
        numero > 5
                ? resolve(`${numero} es mayor a 5`)
                : reject(new Error(`No wey ni de pedo, ${numero} es mayor a 5`));
        }, 3000);
    });

promesa
    .then((data) => console.log(data))
    .catch((err) => console.log(err));