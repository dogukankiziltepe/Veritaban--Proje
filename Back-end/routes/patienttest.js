var express = require('express');
const router = express.Router();
const db = require("../models/index")
const PatientTest = require('../models/patienttest')
const PatientTestProperty = require('../models/patienttestproperty')


router.get("/", async (req,res) =>{
    try {
        const patientTests = await db.PatientTest.findAll({include:[{model : db.Patient},{model:db.Test, include:db.TestProperty},{model:db.PatientTestProperty, include:db.TestProperty}]});
        res.json(patientTests)
    } catch (error) {
        res.json(error)
    }  
})

router.post("/",async (req,res) => {
    const patientTest = new db.PatientTest({
        TestId:req.body.TestId,
        Date: Date.now(),
        PatientId:req.body.PatientId,
        isResolved:true
    });
    try {
        const savedPatientTest = await patientTest.save();
        req.body.PatientTestProperties.forEach(bodyPatientTestProperty => {
            const patientTestProperty = new db.PatientTestProperty({
                TestPropertyId:bodyPatientTestProperty.TestPropertyId,
                PatientTestId:savedPatientTest.PatientTestId
            })
            const saved = patientTestProperty.save()
        });
        res.json(savedPatientTest);
    } catch (error) {
        res.json(error)
    }
    
})

router.get("/:patienttestid",async(req,res) => {
    console.log(req.params.patienttestid)
    try {
        const patientTest = await db.PatientTest.findById(req.params.patienttestid);
        res.json(patientTest)
    } catch (error) {
        res.json(error)
    }
   
})

router.get("/:patientId",async(req,res) => {
    console.log(req.params.patientId)
    try {
        const patientTest = await db.PatientTest.findAll({where:{patientId : req.params.patientId}});
        res.json(patientTest)
    } catch (error) {
        res.json(error)
    }
   
})

module.exports = router