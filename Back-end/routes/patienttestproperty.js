var express = require('express');
const router = express.Router();
const PatientTestProperty = require('../models/patienttestproperty')
const TestProperty = require('../models/testproperty')
const db = require("../models/index")


router.get("/", async (req,res) =>{
    try {
        const patientTestPropertys = await db.PatientTestProperty.findAll();
        res.json(patientTestPropertys)
    } catch (error) {
        res.json(error)
    }  
})

router.post("/",async (req,res) => {
    const patienttestproperty = new db.PatientTestProperty({
        Value: req.body.Value,
        PatientTestId:req.body.PatientTestId,
        TestPropertyId: req.body.TestPropertyId
    })
    try {
        const savedpatienttestproperty = await patienttestproperty.save()
        res.json(savedpatienttestproperty);
    } catch (error) {
        res.json(error)
    }
    
})

router.get("/:patienttestpropertyid",async(req,res) => {
    console.log(req.params.patienttestpropertyid)
    try {
        const patienttestproperty = await db.PatientTestProperty.findById(req.params.patienttestpropertyid);
        res.json(patienttestproperty)
    } catch (error) {
        res.json(error)
    }
   
})

router.post("/patientTestUpdate",async(req,res) => {
    try{
        req.body.forEach(patientTestProperty => {
            var property = db.PatientTestProperty.Update({
                Value: patientTestProperty.Value,
            },{where:{Id:patientTestProperty.Id}})
        });
        res.json(true)
    }
    catch{
        res.json(error)
    }
})

module.exports = router