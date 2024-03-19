
const connectDB = require('./db/connect');

const users = require("./models/users")

const userjson = require("./users.json");


const start = async () =>{
    try {
        await connectDB();
        await users.create(userjson);
        console.log("success");   
    }
        catch (error) {
        console.log(error);  
    }
};

start();