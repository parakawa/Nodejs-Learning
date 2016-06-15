var http=require("http");

var manejador=function(solicitud,respuesta){
	console.log("Recibimos petición");
	respuesta.end("Holi :3")
};

var servidor=http.createServer(manejador);
servidor.listen(8080);
console.log('Servidor corriendo en el puerto 8080');

/*Aprendiendo con Uriel Hernández*/