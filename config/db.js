// const { MongoClient } = require('mongodb')
const mongoose = require("mongoose");

console.log(process.env.URI);
exports.connect=()=>{
    mongoose.connect(
        process.env.URI,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      ).then(()=>{
        console.log("db connected")
      }).catch(err=>{
        console.log('connection failed')
        console.log(err)
        process.exit(1)
      })
}

    

