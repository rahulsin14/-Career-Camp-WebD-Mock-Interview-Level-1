const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    quantity:{
        type:String,
        require:true
    },
    
},{
    timestamps:true
});
const Product=mongoose.model('Product',productSchema);
module.exports=Product;