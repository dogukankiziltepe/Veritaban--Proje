import * as actionTypes from './actionTypes'
import * as model from "../dataModels"

export function SetLaborant(payload : model.Laborant  ){
    return {
        type: actionTypes.LOGIN_LABORANT,
        payload,
      };
}

export function SetPatient(payload: model.Patient){
    return{
        type: actionTypes.LOGIN_PATIENT,
        payload
    }
}

export function Logout(){
    return{
        type: actionTypes.LOGOUT,
    }
}