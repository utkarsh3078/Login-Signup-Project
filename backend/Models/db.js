const mongoose = require("mongoose");

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