
function test(callback) {
    setTimeout(function() {
        //console.log("Probando");
        callback();
    }, 5000);
       
}

function imprimir() {
    console.log("Hola Mundo");
}

test(imprimir);
