const express=require('express');

const router=express.Router();
product_controller=require('../controllers/product_controller');
router.post('/create',product_controller.create);
router.get('/',product_controller.get);
router.delete('/:id',product_controller.delete);
router.post('/:id/update_quantity',product_controller.update_quantity);
module.exports=router;