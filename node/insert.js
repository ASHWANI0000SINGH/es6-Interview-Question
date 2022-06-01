
//Inser Data
const dbConnect=require("./mongodb")

const insert=async ()=>{
const db=  await dbConnect();
const result = await db.insert([
    {name:"shashi",email:"shashi@gmail.com"},
    {name:"anjali",email:"anjali@gmail.com"},

])
if(result.acknowledged){

    console.log(result);
}

}
insert();