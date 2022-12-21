import * as httpClient from '../api/httpClient'
import * as model from "../store/dataModels"
import * as patientActions from "../store/actions/patientActions"


export async function getPatientTests(){
    var response = await httpClient.Get("/patientTest/");
    return response;
    
}

export async function getPatientTestsById(patientId:Number){
        var response = await httpClient.Get("/patientTest/"+patientId);
        return response;    
}


export function setPatientSelectedTest(patientTest:model.PatientTest){
    return async (dispatch:any) => {
        dispatch(patientActions.SetPatientSelectedTest(patientTest))
    }
}

export async function getPatients(){
        var response = await httpClient.Get("/auth/");
        return response;
}

export async function updatePatientTest(patientTestProperties:model.PatientTestProperty[]){
    var response = await httpClient.Post(patientTestProperties,"/patientTest/patientTestUpdate")
}

export async function createPatientTest(patientTest:model.PatientTest){
    var response = await httpClient.Post(patientTest,"/patientTest/").then(res => {
        if(res.data !== null){
            patientTest.PatientTestProperties.forEach(async element => {
                console.log("bua")
                element.PatientTestId = res.data.Id
                var response2 = await httpClient.Post(element,"/patienttestproperty/").then(() => {

                })
            });
            return res;
        }
    })
    
}
