 const mongoose  = require("mongoose");
 const mongoURI = "mongodb://127.0.0.1:27017/inotebook"

 const connectToMongo = async() => {
    mongoose.connect(mongoURI)
    .then(()=>{
        console.log("Connection to Mongo successfull!!");
    })
 }

 module.exports = connectToMongo;