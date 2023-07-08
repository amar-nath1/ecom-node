
const path=require('path')
const rootDir=require('../util/path')
exports.getContactForm=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'))
}

exports.getSuccess=(req,res,next)=>{
    res.send(`<h1>Form successfully filled</h1>`)
    
}