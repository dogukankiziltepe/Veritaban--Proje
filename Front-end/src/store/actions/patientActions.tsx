import * as actionTypes from './actionTypes'
import * as model from "../dataModels"

export function SetPatientTests(payload : model.PatientTest[]  ){
    return {
        type: actionTypes.GET_PATIENT_TESTS,
        payload,
      };
}

export function SetPatientTestProperties(payload: model.PatientTestProperty[]){
    return{
        type: actionTypes.GET_PATIENT_TESTS_PROPERTIES,
        payload
    }
}

export function SetPatientSelectedTest(payload:model.PatientTest){
    return{
        type:actionTypes.SET_SELECTED_PATIENT_TEST,
        payload
    }
}

export function SetPatients(payload:model.Patient[]){
    return{
        type:actionTypes.GET_PATIENTS,
        payload
    }
}