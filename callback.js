function conectarConNetflix(usuario,clave,responder){

    //BD NETFLIX
    const USUARIO="pedro"
    const CLAVE="admin123"
    console.log("Buscando datos en el servidor...")

    setTimeout(function(){
       if(usuario==USUARIO && clave==CLAVE){

            responder(200)

       }else{

            responder(404)

       }
    },5000)
 
}

conectarConNetflix("pedro","admin123",function(estado){

        if(estado==200){
            console.log("Bienvenido")
        }else{
            console.log("Revisa credenciales")
        }

})