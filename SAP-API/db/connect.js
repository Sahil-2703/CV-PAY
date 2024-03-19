const mongoose = require("mongoose");

uri ="mongodb://0.0.0.0:27017/bank";

const connectDB = () =>{
    console.log("Connecting to db");
        return mongoose.connect(uri,{
        // useNewUrlParser: true,
        // useUnifiedTopology: true
        });
    

};
module.exports = connectDB;