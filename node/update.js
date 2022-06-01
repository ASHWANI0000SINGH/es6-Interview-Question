const dbConnect=require("./mongodb")
const update=async ()=>{
    const data=  await dbConnect();
    let result=  await data.update(
        {name:"shashi"},{
$set:{name:"bala",email:"bala@gmail.com"}
        }
    )
    console.log(result)

}
update();