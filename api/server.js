const express = require("express")
const dotenv = require("dotenv")
dotenv.config();
const cors= require("cors")

const courseController = require("./Controller/courseController")



var app = express()

app.listen(process.env.PORT,() =>{
    console.log(`Hey Im at PORT ${process.env.PORT}`);
    
})

app.use(
    cors({
        origin:"*"
    })
)

app.use("/course/", courseController)