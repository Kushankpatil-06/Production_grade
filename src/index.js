import dotenv from "dotenv"
//  mongoose.set(‘strictQuery’, true) 
// import moongose from "moongose";
// import {DB_NAME} from "./constants";
import connectDB from "./db/index.js"
dotenv.config({
    path:'./env'
})

connectDB();
console.log(process.env.MONGODB_URL)
.then(()=>{
    app.listen(process.env.PORT||8000 ()=>{
        console.log(`Running on the port : ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("Mongo Db connection failed",error);
})













// import express from "express";

// const app = express();


// (async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//        app.on("erroe", (error)=>{
//         console.log("app not able to talk")
//         throw err;

//        })

//        app.listen(process.env.PORT,()=>{
//         console.log(`app is litening on port ${process.env.PORT}`)
//        })
        
//     } catch (error) {
//         console.error("ERROR",error)
//         throw err;
//     }
// })()//iife function immediate excecuton