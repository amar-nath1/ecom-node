
const express=require('express')
const path=require('path')
const rootDir=require('../util/path')
const router=express.Router()
const sdata=require('../data/sdata')
const contactController=require('../controllers/contact')

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})

router.get('/contactus',contactController.getContactForm)

router.get('/sdata',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin', 'http://localhost:8100');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.json(sdata)
})

router.post('/success',contactController.getSuccess)

router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports=router