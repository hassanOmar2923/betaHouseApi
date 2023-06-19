const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const app=express()
app.use(express.json());
//connecting to mongodb server
mongoose.connect('mongodb://127.0.0.1:27017/betaHouse')
  .then(() => console.log('Connected!'));

//mesha u ka kacayo
app.get('/',(req,res)=>{
    res.json('hi wolrd')
})

//routes
const userRoute=require('./routes/user-route')
const houseRoute=require('./routes/house-route')
const imageRoute=require('./routes/image-route')
const loginRoute=require('./routes/login-route')

app.use('/users',userRoute)
app.use('/houses',houseRoute)
app.use('/images',imageRoute)
app.use('/login',loginRoute)










app.listen(process.env.Port,()=>{
    console.log('listening on port',process.env.Port)
})
