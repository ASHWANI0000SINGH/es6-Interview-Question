const http=require("http");

function dataControl(req,res){
    res.writeHead(200,{"Content-Type":"application\json"});
    res.write(JSON.stringify({name:"ashwani"}))
    res.end();
}

http.createServer(dataControl).listen(4200)