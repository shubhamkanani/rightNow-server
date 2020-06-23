import express from "express";
import cors from "cors";
import setupMiddware from './middlewares'
const app = express();

require("dotenv").config()

setupMiddware(app)


app.use(cors());
app.use('/auth',(req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Authorization, Accept, Access-Control-Al" +
        "low-Methods"
    )
  res.header("X-Frame-Options", "deny")
  res.header("X-Content-Type-Options", "nosniff")
  next();
})
app.get('/auth',(req,res)=>{
    console.log('done')
})
export default app;