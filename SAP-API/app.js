const express = require('express');
const app = express();


const connectDB = require('./db/connect');

const PORT = process.env.Port || 5000;

const users_routes = require("./routes/users");
app.get("/",(req,res)=>{
    res.send("Hi, I am Live");

});

// middleware or to set router

app.use("/api", users_routes );

const start = async () =>{
    try {
        await connectDB();
        app.listen(PORT, () =>{
            console.log(`${PORT} yes I am Connected aditya`);
        });
    } catch (error) {
        console.log(error);
        
    }
}


start();