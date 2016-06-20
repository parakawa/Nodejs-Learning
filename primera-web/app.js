var express=require("express");
var app=express();

app.get("/",function(req,res){
	res.end("Holi :3");
});

app.listen(8080);