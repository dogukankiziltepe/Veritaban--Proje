var express = require('express');
const db = require("../models/index")
const router = express.Router();
const Patient = require('../models/patient')
const Laborant = require('../models/laborant')


router.get("/", async (req,res) =>{
    try {
        const patient = await db.Patient.findAll();
        res.json(patient)
    } catch (error) {
        res.json(error)
    }  
})

router.post("/patientLogin",async (req,res) => {
    
    try {
        const patients = db.Patient.findAll({where:{EMail : req.body.EMail}});
        if(patients.length>0){
            isPassTrue = patients[0].Password === req.body.Password
            res.json(isPassTrue ? patients[0]:null)
        }
        else{
            res.json(false)
        }
    } catch (error) {
        res.json(error)
        }
})

router.post("/laborantLogin",async (req,res) => {
    
    try {
        const laborants = await db.Laborant.findAll({where:{EMail : req.body.EMail}});
        console.log(laborants)
        if(laborants.length>0){
            isPassTrue = laborants[0].Password === req.body.password
            res.json(isPassTrue ? laborants[0]:null)
        }
        else{
            res.json(false)
        }
    } catch (error) {
        res.json(error)
        }
})


router.post("/patientRegister",async (req,res) => {
    var patient = new db.Patient({
        Name: req.body.Name,
        Surname: req.body.Surname,
        EMail: req.body.EMail,
        Password: req.body.Password,
    })
   var a = await patient.save();
   console.log(a)
    try {
        res.json(savedPatient);
    } catch (error) {
        res.json(error)
    }
})

router.post("/laborantRegister",async (req,res) => {
    var laborantt = new db.Laborant({
        Name: req.body.Name,
        Surname: req.body.Surname,
        EMail: req.body.EMail,
        Password: req.body.Password,
    })
   var a = await laborantt.save();
   console.log(a)
    try {
        res.json(response);
    } catch (error) {
        res.json(error)
    }
})

router.get("/:patienttestid",async(req,res) => {
    console.log(req.params.patienttestid)
    try {
        const patientTest = await PatientTest.findById(req.params.patienttestid);
        res.json(patientTest)
    } catch (error) {
        res.json(error)
    }
   
})

module.exports = router