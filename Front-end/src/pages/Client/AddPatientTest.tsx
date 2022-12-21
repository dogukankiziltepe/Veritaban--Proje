import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as testService from '../../services/testService'
import * as testActions from '../../store/actions/testActions'
import * as patientTestService from '../../services/patientTestServices'
import * as patientActions from "../../store/actions/patientActions"
import { Patient, PatientTest, PatientTestProperty, Test, TestProperty } from '../../store/dataModels';
import PatientTestPropertyItem from '../../components/PatientTestPropertyItem';
import { useNavigate } from 'react-router';

export default function AddPatientTest() {
    const [patientTest, setpatientTest] = useState<any>({
        TestId:0,
        PatientTestProperties:[],
        PatientId:0,
    })
    const Tests = useSelector((state: any) => state.testReducer.Tests);
    const Patients = useSelector((state: any) => state.patientReducer.Patients);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        testService.getTests().then(res => res.data).then(data => dispatch(testActions.SetTests(data)));
        patientTestService.getPatients().then(res => res.data).then(data => dispatch(patientActions.SetPatients(data)))
    }, [])
    const SetPatientTestProperty= (testPropertyId:number,value:number) => {
        var copy = patientTest.PatientTestProperties
        var selected = copy.filter((x:PatientTestProperty) => x.TestPropertyId === testPropertyId)[0];
        selected["Value"] = value;
        setpatientTest({...patientTest,PatientTestProperties:copy})
    }
    const saveTest = async () => {
        await patientTestService.createPatientTest(patientTest)
        navigate("/patienttests")
    }
    const setTest = (testId:number) => {
        if(testId !== 0){
            var TestProperties = Tests.filter((x:Test) => x.Id === testId)[0].TestProperties;
            var PatientTestProperties = TestProperties.map((testProperty:TestProperty) => {
                return {
                    Name:testProperty.Name,
                    Value : 0,
                    TestPropertyId: testProperty.Id,
                    Unit:testProperty.Unit
                }
            })
            setpatientTest({...patientTest, TestId:testId, PatientTestProperties:PatientTestProperties})
        }
    }
    const setPatient = (patientId:number) => {
        if(patientId !== 0){
            setpatientTest({...patientTest, PatientId:patientId})
        }
    }
    return (
        <div className="container"> 
        <h2 className="mt-3">Hasta Testi Oluştur</h2>
            <div className="row mt-3 justify-content-center">
                <span>Test</span>
                <select className="ml-3 form-control col-4" onChange={(event) => setTest(parseInt(event.target.value))}>
                    <option value="0">Test Seçiniz.</option>
                    {Tests? Tests.length>1 ? Tests.map((test:Test,index:number) =>  <option key={index} value={test.Id}>{test.Name}</option> ):null:null}
                </select>
            </div>
            <div className="row mt-3 justify-content-center">
            <span>Hasta</span>
                <select className="ml-3 form-control col-4" onChange={(event) => setPatient(parseInt(event.target.value))}>
                    <option value="0">Hasta Seçiniz.</option>
                    {Patients? Patients.length>1 ? Patients.map((patient:Patient,index:number) =>  <option key={index} value={patient.Id}>{patient.Name}</option> ):null:null}
                </select>
            </div>
            <h5 className="mt-3">Test Özellikleri</h5>
            <div className="mt-3 justify-content-center">
                {patientTest.PatientTestProperties? patientTest.PatientTestProperties.length>0 ? 
                    patientTest.PatientTestProperties.map((patientTestProperty:PatientTestProperty,index:number) =>  <PatientTestPropertyItem valueChange={SetPatientTestProperty} patientTestProperty = {patientTestProperty} />)
               :null:null}
            </div>
            <button className="btn btn-primary mt-3" type="button" onClick={() => saveTest()}>Testi Kaydet</button>
        </div>
    )
}
