const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const AuthRouter = require("./Routes/Authrouter.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/authentication";
main()
    .then(()=>{
    console.log("Connected to MongoDB");
    }).catch(err=>{
        console.log(err);
    });
async function main(){
    await mongoose.connect(MONGO_URL);
}

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter);
const PORT = process.env.PORT || 8080;


app.get("/ping", (req,res)=>{
    res.send("Hi I am root");
})
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});