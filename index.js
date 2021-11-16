let express = require('express');
let Contenedor = require('./src/Contenedor.js');

let app = express();
const PORT = 8080;

function randomInt(max){
    let rand = Math.random() * (max);
    return Math.ceil(rand);
}

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});

let productos = new Contenedor('./src/db/productos.txt');

app.get('/', (req, res) => {
    res.json({response : null})
});

app.get('/productos', async (request, response) => {
    let res;

    try {
        res = await productos.getAll();
    } catch(error) {
        console.log(`The following error has ocurred:\n${error}`);
        res = {response : "An error has ocurred"};
    }

    response.json(res);

});

app.get('/productos/random', async (req, res) => {
    let response;

    try {
        id = await productos.getAll();
        id = randomInt(id.length);
        console.log(id);
        response = await productos.getById(id);
        
    } catch(error){
        console.log(`The following error has ocurred:\n${error}`);
        response = {'response' : `An error has ocurred: ${error}`};
    }
    
    res.json(response);
})