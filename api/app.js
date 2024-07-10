import express, { json } from "express";
import env from "dotenv"
import botRoute from "./routes/bot.js"
import cors from "cors";



const app=express();
env.config();
const port=3000;

env.config();
app.use(express.json());
app.use(cors({origin:process.env.CLIENT_URL}))
app.use("/api/bot", botRoute)


app.listen(port,()=>{
    console.log(`Listening on the port ${port}`)
})