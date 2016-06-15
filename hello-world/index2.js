var http=require("http"),
	fs=require("fs");

http.createServer(function(req,res){
	fs.readFile("./index.html"),function(err,html){
		res.writeHead(200,{"COntent-Type":"aplication/json"})
		res.write(JSON.stringfy({nombre:"Paty",username:"parakawa"}));
		res.end();
	};

}).listen(8080);