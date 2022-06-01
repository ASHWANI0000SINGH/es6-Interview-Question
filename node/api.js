const express= require("express");
const dbConnect=require("../mongodb");
const app = express();

app.use(express.json())


app.get("/", async (req,res)=>{
    let data =await dbConnect();
    data= await data.find({}).toArray();
    console.log(data)

    res.send({
        data
    })
})
app.post("/", async (req,res)=>{
    let data= await dbConnect();
    let result=data.insert(req.body);
    res.send(result);
})

app.put("/", async (req,res)=>{
    let data= await dbConnect();
let result=data.updateOne(
    {name:"anjali"},{
        $set:req.body

        

    }
)
    console.log(req.body)
    res.send( result +"updated");
})



app.listen(4000);
