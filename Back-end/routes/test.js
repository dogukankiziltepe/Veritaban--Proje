var express = require('express');
const router = express.Router();
const db = require("../models/index")
const Test = require('../models/test')

router.get("/", async (req,res) =>{
    try {
        const tests = await db.Test.findAll({include:db.TestProperty});
        res.json(tests)
    } catch (error) {
        res.json(error)
    }  
})

router.post("/",async (req,res) => {
    const test = new db.Test({
        Name:req.body.Name
    })
    try {
        const savedTest = await test.save()
        res.json(savedTest);
    } catch (error) {
        res.json(error)
    }
    
})

router.get("/:testid",async(req,res) => {
    console.log(req.params.testid)
    try {
        const test = await db.Test.findById(req.params.testid);
        res.json(test)
    } catch (error) {
        res.json(error)
    }
   
})

module.exports = router