const dbConnect=require("../mongodb")

const deleteDb= async()=>{
    const data=  await dbConnect();
    let result= await data.deleteMany({name:"abc"})
    if(result.acknowledged){
        console.log("deleted")


    }

}
deleteDb();