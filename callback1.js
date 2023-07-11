

// function test(callback) {
//     setTimeout(function() {
//         //console.log("Probando");
//         callback();
//     }, 5000);
       
// }

// function imprimir() {
//     console.log("Hola Mundo");
// }

// test(imprimir);


function test(callback) {
    setTimeout(function() {
        //console.log("Probando");
        callback();
    }, 1500);     
}

function imprimir() {
    console.log("Mensaje Impreso");
}

test(imprimir);