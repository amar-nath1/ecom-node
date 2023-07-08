
const express=require('express')
const adminRoutes=require('./routes/admin')
const shopRoute=require('./routes/shop')
const path=require('path')
const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRoutes)

app.use(shopRoute)

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404page.html'))
})

app.listen(4000)