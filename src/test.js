const Contenedor = require('./Contenedor.js');

async function crear(){
    let file = new Contenedor('./db/productos.txt');
    let product1 = {
        title : 'Escuadra',
        price : 132.24,
        thumbnail : "url"
    };
    let product2 = {
        title : 'Calculadora',
        price : 4999,
        thumbnail : 'url/calculadora'
    };
    let product3 = {
        title : 'Cuaderno',
        price : 299,
        thumbnail : 'url/cuaderno'
    };

    await file.save(product1);
    await file.save(product2);
    await file.save(product3);
}
