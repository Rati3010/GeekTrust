import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connection } from "./config/db.js";
import { Quiz } from "./models/QuizModel.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
    res.send("Welcome to Live Quizz");
});
app.post("/quizzes",async (req,res)=>{
     const quizz = req.body;
     try {
        const newQuizz = new Quiz(quizz)
        await newQuizz.save()
        res.json({message:"Created a Quizz"});
     } catch (error) {
        res.json({error:"Facing Problem during Post. Try after some time..."})
     }
})
app.get("/quizzes/active",(req,res)=>{

})
app.get("/quizzes/:id/result",(req,res)=>{

})
app.get("/quizzes/all",(req,res)=>{

})
app.listen(process.env.PORT,async()=>{
     try {
        await connection;
        console.log("Connected to DB port:-",process.env.port);
     } catch (error) {
        console.log(error);
     }
})