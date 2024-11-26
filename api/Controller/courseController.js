const {query} = require("express")
const express = require("express")
const db = require("../Db/config/dbConfig")
const router = express.Router()


// Create_Course

router.post("/create/", (req,res)=>{
    try{
        const course_name = req.body.course_name
        const course_desc = req.body.course_desc
        const duration = req.body.duration
        const start_date = req.body.start_date
        const end_date = req.body.end_date
        const fees = req.body.fees

        var courseInsert = `INSERT INTO course (course_name,course_desc,duration,start_date,end_date,fees)
        VALUES ('${course_name}','${course_desc}', '${duration}', '${start_date}','${end_date}','${fees}') `;
        db.query(courseInsert, (error,results)=>{
            if(error){
                res.json({
                    success: false,
                    message: 'Course Not Created',
                    error
                })
            }else{
                res.json({
                    success:true,
                    message:'Course Created Successfully',
                    results
                })
            }
        })


    }catch(error){
        res.json({
            success: false,
            message:'Something Went Wrong',
            error
        })
    }
})


module.exports=router