import * as actionTypes from "../actions/actionTypes"
import { Patient, PatientTest } from "../dataModels";

interface state{
    SelectedPatientTest: PatientTest|null,
    PatientTests : PatientTest[]|[],
  }
  
const PatientinitialState:state={
    SelectedPatientTest:null,
    PatientTests:[],
  }

export default function patientReducer(initialstate:state = PatientinitialState, action: { type: any; payload: any; }){
    switch (action.type) {
        case actionTypes.GET_PATIENT_TESTS:
          return{
              ...initialstate,
              PatientTests:action.payload
            };
        case actionTypes.SET_SELECTED_PATIENT_TEST:
            return{
                ...initialstate,
                SelectedPatientTest:action.payload
            }
        case actionTypes.GET_PATIENTS:
            return{
                ...initialstate,
                Patients:action.payload,
                
            }
        default:
            return initialstate;
    }
}
