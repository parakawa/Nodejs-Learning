var http=require("http"),
	fs=require("fs");

http.createServer(function(req,res){
	fs.readFile("./index3.html",function(err,html){
		var html_string=html.toString(),
			variables=html_string.match(/[^\{\}]+(?=\})/g);
			nombre="Paty Arakawa";
		//variables ['nombre']
		for (var i=variables.length-1;i>=0;i--){
			/*Lo ejecutamos como código de js
			 para obtener el valor de la variable*/
			 var value=eval(variables[i]);

			 //Reemplazar el contenido con {} por su valor correspondiente
			 html_string=html_string.replace("{"+variables[i]+"}",value);
		};

		res.writeHead(200,{"Content-Type":"text/html"})
		res.write(html_string);
		res.end();

	});
}).listen(8080);