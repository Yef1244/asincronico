function conectarConNetflix(usuario,clave){

    let promesa=new Promise(function(resolve,reject){

    //BD NETFLIX
    const USUARIO="pedro"
    const CLAVE="admin123"
    console.log("Buscando datos en el servidor...")

    setTimeout(function(){
       if(usuario==USUARIO && clave==CLAVE){

            resolve("Bienvenido")

       }else{

            reject("Revisa credenciales")

       }
    },5000)

    })

    return promesa
}

conectarConNetflix("pedro","admin123")
.then(function(respuesta){
    console.log(respuesta)

})
.catch(function(error){
    console.log(error)

}) 