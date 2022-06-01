const http=require("http");

function dataControl(req,res){
    res.write("<h1> first serevr </h1>")
    res.end();
}

http.createServer(dataControl).listen(4000)