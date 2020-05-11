//             0, 1, 2, 3, 4
const array = [1 ,2 ,3 ,4 ,5,6];

//Imperativa
console.log(`For de forma Imperativa`);
for(let i = 0; i<array.length; i++){
console.log(array[i]);
}

//Funcional
console.log(`For de forma funcional`);
array.forEach(element => console.log(element));

//map
//Generar un nuevo arreglo a partir de uno previamente definido
console.log(`multiplicado por dos`);
let arrayNuevo = [];
for(let i = 0; i<array.length; i++){
    arrayNuevo[i] = (array[i]*2);
    }
console.log(arrayNuevo);


const arrayNuevo = array.map((x,y) => `indice ${y}: ${x}*2 = ${x* 2}`);
console.log(arrayNuevo);

//filter
//semi imperativa
let arrayNuevo = [];
for(let i = 0; i<array.length; i++){
if(array[i]% 2 ===0){
    arrayNuevo.push(array[i]);
}
}

const arrayNuevo = array.filter(element => element % 2 ===0);
console.log(arrayNuevo);

// Reduce
const promedio;
let sumatoria = 0;

for(let i=0; i<array.length; i++){
    sumatoria+= array[i];
}
const promedio = sumatoria / array.length;
console.log(promedio);

const promedio = array.reduce((a,b) => a + b) / array.length;
console.log(promedio);