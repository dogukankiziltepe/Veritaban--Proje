import * as httpClient from '../api/httpClient'
import * as model from "../store/dataModels"
import * as authActions from "../store/actions/authActions"

export async function LoginLaborant(data : model.Laborant  ){
        var response = await httpClient.Post(data,"/auth/laborantLogin");
        if(response.data !== null || response.data !== false){
            return response;
        }
        else{
            return null;
        }
    
}

export function LoginPatient(data: model.Patient){
    return async (dispatch:any)  => {
        var response = await httpClient.Post(data,"/auth/PatientLogin");
        if(response.data !== null || response.data !== false){
            dispatch(authActions.SetPatient(data))
        }
        else{
            return null;
        }
    }
}

export async function RegisterLaborant(data: model.Laborant){
        var response = await httpClient.Post(data,"/auth/laborantRegister");
        if(response.data !== null || response.data !== false){
           return true;
        }
        else{
            return null;
        }
    
}

export async function RegisterPatient(data: model.Patient){
        var response = await httpClient.Post(data,"/auth/patientRegister");
        if(response.data !== null || response.data !== false){
            return true;
        }
        else{
            return null;
        }
}