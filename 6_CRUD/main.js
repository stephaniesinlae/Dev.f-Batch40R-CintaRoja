const request = require('request');
const { ID } = require('./ID');
const { Autor } = require('./Autor');

//Funcion crear autor metodo POST devolviendolo en una promesa
// request.post({url:'http://service.com/upload', form: {key:'value'}}, function(err,httpResponse,body){ /* ... */ })
// const crearAutor = (nomb, apell, nacion, bio, gene, ed) => {
//     const URL =`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/`;
//         return new Promise((resolve, reject) => {        
//             request.post(URL, {form: {
//                 name = nomb,
//                 last_name =  apell,
//                 nacionalidad = nacion,
//                 biography = bio,
//                 gender = gene,
//                 age = edad}}, (err,httpResponse,body) => {
//                     resolve (body);
//                     reject (new Error(`No se pude crear el autor.`))
//             })
//         });
// }

//Funcion pedir autor por ID devolviendolo en una promesa
const peticionID = (id) => {
    const URL =`https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}`;
        return new Promise((resolve, reject) => {
            request(URL, (error, response, body) => {
                if(response.statusCode === 200) {
                    const respuesta = JSON.parse(body);
                    const nID = new ID(
                        respuesta.id,
                        respuesta.name,
                        respuesta.last_name,
                        respuesta.nacionalidad,
                        respuesta.biography,
                        respuesta.gender,
                        respuesta.age,
                        respuesta.is_alive);
                    resolve (nID);
                }else {
                    reject (new Error(`No encontré el ID requerido ${id} ${error}.`))
                }
            })
        });
}

// crearAutor('Stephanie', 'Sandoval','MX', 'Post desde mi codigo', 'F', 23)
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

peticionID(6486)
.then((data) => console.log(data))
.catch((err) => console.log(err));

peticionID(6410)
.then((data) => console.log(data))
.catch((err) => console.log(err));

peticionID(4264)
.then((data) => console.log(data))
.catch((err) => console.log(err));