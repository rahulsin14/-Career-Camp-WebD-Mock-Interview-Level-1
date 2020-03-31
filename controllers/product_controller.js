const Product=require('../models/product');
module.exports.create=async function(req,res){
    let product=await Product.findOne({name:req.body.name});
    if(product){
        return res.json('200',{
            message:'Product already exists'
        })
    }else{
        await Product.create({name:req.body.name,
        quantity:req.body.quantity});
        return res.json('200',{
            message:'Product created Succesfully',
            data:req.body
        })
    }
}
module.exports.get=async function(req,res){
    let products=await Product.find({});
    return res.json('200',{
        message:'List of all products',
        data:products
        
    })
}
module.exports.delete=async function(req,res){
    let product=await Product.findById(req.params.id);
    if (product._id == req.params.id){
        product.remove();
    }
    return res.json('200',{
        message:'product deleted'
    })
}
module.exports.update_quantity=async function(req,res){
    let product=await Product.findById(req.params.id);
    if (product._id == req.params.id){
        if(req.params.number=='10'){
            product.quantity=product.quantity+1;
            return res.json('200',{
                message:'product quantity increamented by 1 '
            })
        }else{
            product.quantity=product.quantity-1;
            return res.json('200',{
                message:'product quantity decremented by 1 '
            })
        }
    }
}