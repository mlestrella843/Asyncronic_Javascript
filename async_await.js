
async function obtenerDatos(){
    let respuesta = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico');

    let datos = await respuesta.json();

    console.log(datos);

}

obtenerDatos();
console.log("El codigo sigue");