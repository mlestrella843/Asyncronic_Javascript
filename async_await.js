
//Permite manejar funciones asincronnas como si fuesen sincronas. Pues debe cumplirse cronologicamente 
//pero evita que el servidor arroje errorres de tiempo de espera.

async function obtenerDatos(){
    let respuesta = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico');

    let datos = await respuesta.json();

    console.log(datos);

}

obtenerDatos();
console.log("El codigo sigue");

