const request = require('request');
const { Libro } = require('./Libro');
const { Autor } = require('./Autor');
const { Banda } = require('./Banda');
const { Asteroide } = require('./Asteroide');

//Funcion Pedir Libro por nombre
const peticionLibro = (nombre) => {
const URL = 'http://openlibrary.org/search.json?q=';
    request(`${URL}${nombre}`, (error, response, body) => {
        if(response.statusCode === 200) {
            const respuesta = JSON.parse(body);
            const nLibro = new Libro(
                respuesta.docs[0].title_suggest,
                respuesta.docs[0].author_name);
            console.log(nLibro);
        } else {
            return `No encontré al Libro - HTTP status: ${response.statusCode} ${response.statusMessage}.`;
        }
    });
}

//Funcion Pedir libros por autor
const peticionAutor = (nombre) => {
const URL = 'http://openlibrary.org/search.json?author=';

    request(`${URL}${nombre}`, (error, response, body) => {
        if(response.statusCode === 200) {
            const respuesta = JSON.parse(body);
            const coleccion = respuesta.docs.map(element => element.title);
            const nAutor = new Autor(
                respuesta.docs[0].author_name,
            coleccion);
            console.log(nAutor);
        } else {
            return `No encontré al Autor - HTTP status: ${response.statusCode} ${response.statusMessage}.`;
        }   
        
    });
}

//Peticion pedir genero por banda
const peticionGenero = (nombre) => {
    const URL = 'http://www.theaudiodb.com/api/v1/json/1/search.php?s=';
        request(`${URL}${nombre}`, (error, response, body) => {
            if(response.statusCode === 200) {
                const respuesta = JSON.parse(body);
                const nBanda = new Banda(
                    respuesta.artists[0].strArtist,
                    respuesta.artists[0].strGenre);
                console.log(nBanda);
            } else {
                return `No encontré a la Banda - HTTP status: ${response.statusCode} ${response.statusMessage}.`;
            }
        });
    }

//Peticion devolver asteroides NASA
const peticionAsteroide = (finicio, ffinal) => {
    const URL = 'http://www.neowsapp.com/rest/v1/feed?start_date=';
        request(`${URL}${finicio}&end_date=${ffinal}`, (error, response, body) => {
            if(response.statusCode === 200) {
                const respuesta = JSON.parse(body);
                const nAsteroide = new Asteroide(
                    respuesta.near_earth_objects[2020-05-06][0].name);
                console.log(nAsteroide);
            } else {
                return `No encontré Asteroides - HTTP status: ${response.statusCode} ${response.statusMessage}.`;
            }
        });
    }

peticionLibro('Maria');
peticionLibro('star wars');
peticionAutor('Jenny Han');
peticionGenero('The Chainsmokers');
peticionGenero('Avicii');
peticionAsteroide('2020-04-31', '2020-05-05')


// XJc8On7J3QFEO7cTS8YR8F5AAs2eLuKwkyPUBodH