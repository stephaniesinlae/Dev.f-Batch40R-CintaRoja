//http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse
const request = require('request');
const { Banda } = require('./Banda');

const obtenerBanda = (nombre) =>{
    const URL = `http://www.theaudiodb.com/api/v1/json/1/search.php?s=${nombre}`;

    return new Promise((resolve, reject) => {
        request(URL, (error, response, body) => {
            const respuesta = JSON.parse(body);
            if(respuesta.artists != null){
                const { strArtist, intFormedYear, strGenre, strWebsite, strCountry }  = respuesta.artists[0];
                const banda = new Banda(strArtist, intFormedYear, strGenre, strWebsite, strCountry);
                resolve(banda);
            }else{
                reject(new Error(`No we, que pedo de banda es esa? ${nombre} ${error}`))
            }  
        })
    });
}

obtenerBanda('Viento en Contra')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));