import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express();
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
//   app.use(methodOverride());


//// routes import
import userRouter from "./routes/user.routes.js"

//routes declaration
//middlewqare aayega he  isliye hum use use kre ge yaha pe

app.use("/api/v1/users",userRouter)



export {app} 