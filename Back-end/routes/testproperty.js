var express = require('express');
const router = express.Router();
const db = require("../models/index")
const TestProperty = require('../models/testproperty')

router.get("/", async (req,res) =>{
    try {
        const testproperties = await db.TestProperty.findAll();
        res.json(testproperties)
    } catch (error) {
        res.json(error)
    }  
})

router.post("/",async (req,res) => {
    const testProperty = new db.TestProperty({
        Name: req.body.Name,
        Unit: req.body.Unit,
        TestId: req.body.TestId,
        ReferenceMax: req.body.ReferenceMax,
        ReferenceMin: req.body.ReferenceMin
    })
    try {
        const savedTestProperty = await testProperty.save()
        res.json(savedTestProperty);
    } catch (error) {
        res.json(error)
    }
    
})

router.get("/:testpropertyid",async(req,res) => {
    console.log(req.params.testpropertyid)
    try {
        const testProperty = await db.TestProperty.findById(req.params.testpropertyid);
        res.json(testProperty)
    } catch (error) {
        res.json(error)
    }
   
})

module.exports = router