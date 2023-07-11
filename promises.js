let miPromesa = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(error){
            reject("La promesa ha fallado");
        }
        resolve("La promesa se ha cumplido");
    }, 2000)
})

miPromesa.then(function(resultado){
    console.log(resultado);
});