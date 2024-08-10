const homecontroller=require('./../Controllers/HomeController')
const express=require('express')
const router=express.Router()
router.post("/Addnewsletter",homecontroller.newAdresse );
router.post("/AddComment", homecontroller.newComment);

module.exports=router

