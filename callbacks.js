

function avanzaFila(callback){
    setTimeout(function() {
        console.log("Tu turno ha llegado");
        callback();
    }, 5000);
}


function mujerTeLlama(){
    console.log("Te presentas a tu turno");
}


console.log("LLegas a la fila");
avanzaFila(mujerTeLlama);
console.log("Te vas a comprar cafe");