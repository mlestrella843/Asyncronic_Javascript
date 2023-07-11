

let promise1 = new Promise(function (resolve, reject){
    setTimeout(resolve, 2000, "Hola");
});

let promise2 = new Promise(function (resolve, reject){
    setTimeout(resolve, 4000, "Soy Maria");
});

Promise.all([promise1, promise2]).then(function(valores){
    console.log(valores);
});

console.log("El codigo sigue su camino");
