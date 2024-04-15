
const express = require('express');
const app = express();

app.use(function ageChecker(req,res,next)
{
    console.log(age)
    if(req.querry.age > 10)
    {
        next()
    }
    else{
        res.json({
            msg:"sorry you are not eligible for the ride"
        })
    }
})

app.get('/ride1',(req,res) =>{
    res.json({
        msg:"you are going on ride 1"
    })
})

app.listen(3000,()=>{
    console.log("app started at prot 3000")
})