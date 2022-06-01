const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-com");
const productSchema= new mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    category:String
})
const main=async ()=>{
    const productModel= mongoose.model("products", productSchema);
    let data =new productModel({
        name:"vivo",
        brand:"mi",
        category:"phone",
        price:"1300"

    })
    let result= await data.save();
    console.log(result);
}

const update= async ()=>{
    
    const productModel= mongoose.model("products", productSchema);
    let data= await productModel.updateOne(
        {name:"one"},
        {
            $set: { name:"one-plus"}
        }
        )
        console.log(data);

}

const deleteFun = async ()=>{
    const productModel= mongoose.model("products", productSchema);
    let data= await productModel.deleteOne({
        name:"one-plus"

    })
    console.log(data);

}
const findInDb = async ()=>{
    const productModel= mongoose.model("products", productSchema);
    let data= await productModel.find({name:"iphone-12"})
    console.log(data);

}
findInDb();