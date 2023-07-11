async function obtenerTodo(){
    let respuestaGasolina = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico');
    let datosGasolina = await respuestaGasolina.json();

    let respuestaDolar = await fetch('https://open.er-api.com/v6/latest/USD');
    let datosDolar = await respuestaDolar.json();

    console.log(datosGasolina, datosDolar);
}

obtenerTodo();