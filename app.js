require("dotenv").config();
require("./config/db").connect();
const express=require('express');
const morgan = require("morgan");

const port=4000
const app=express()
app.use(express.json())
app.use(morgan('dev'))
const userRoute=require('./routes/router')
const user=require('./models/user')


app.use('/api',userRoute)





app.listen(port,()=>{
    console.log(`port is running on ${port}`);
})