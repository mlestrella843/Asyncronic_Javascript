
//FUNCION EN FORMA SENCILLA, SIN MANEJO DE NADA
// function sumarNumeros(a,b){
//     setTimeout(function(){
//         console.log(a + b);
//     }, 2000);
// }
// sumarNumeros(1,2);

//Manejo de errores con CALLBACKS
// function sumarNumeros( a, b, callback){
//     setTimeout(function(){
//         if(typeof a != 'number' || typeof b != 'number'){
//             return callback( new Error('Algun argumento no es numero'));
//         }
//         callback(null, a+b);
//     }, 1000);
   
// }
// //Aqui en vez de crear una funcion nombrada, se creo una funcion anonima
// sumarNumeros( 1, 2, function(error, resultado){
//     if(error){
//         console.error(error);
//     } else{
//         console.log(resultado);
//     }
// });
//Manejo de errores con PROMISES
// function sumarNumeros(a,b){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             if(typeof a != 'number' || typeof b != 'number'){
//                 reject(new Error("Ambos argumentos deben ser numeros"));
//             }else{
//                 resolve(a+b);
//             }
//         }, 2000);
//       })       
//     }
//     sumarNumeros(1,5)
//     .then(function(resultado){
//         console.log(resultado);
//     }).catch(function(error){
//         console.log(error);
//     })

    //Manejo de errores con ASYNC_AWAIT
    async function sumarNumeros(a,b){
            if(typeof a != 'number' || typeof b!= 'number' ){
                throw new Error('Alguno de los argumentos no es un numero');
            }
            return a + b;
        }

        async function manejoErrores(){
            try{
                let resultado = await sumarNumeros( 2, 4);
                console.log(resultado);
            }catch(error){
                console.error(error.message);
            }
        }
        manejoErrores();