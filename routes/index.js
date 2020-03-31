const express=require('express');
// const passport=require('passport');
const router=express.Router();
router.use('/products',require('./products'));
module.exports=router;