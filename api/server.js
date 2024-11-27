const express = require("express")
const dotenv = require("dotenv")
dotenv.config();
const cors= require("cors")

const courseController = require("./Controller/courseController")



var app = express()

app.listen(process.env.PORT,() =>{
    console.log(`Hey Im  PORT at ${process.env.PORT}`);
    
})

app.use(
    cors({
        origin:"*",
    })
)
app.use(express.json());
app.use("/course/", courseController)