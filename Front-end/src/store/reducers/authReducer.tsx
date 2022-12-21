import * as actionTypes from "../actions/actionTypes"
import { Laborant, Patient } from "../dataModels";

interface state{
  Laborant?: Laborant|null,
  isLogin? : boolean,
  Patient? : Patient|null,
}

const authınitialState:state={

}

export default function authReducer(initialstate = authınitialState, action: { type: any; payload: any; }){
    switch (action.type) {
        case actionTypes.LOGIN_LABORANT:
          return{
              ...initialstate,
              isLogin:true,
              Laborant:action.payload
            };
        case actionTypes.LOGIN_PATIENT:
            return{
                ...initialstate,
              isLogin:true,
              Patient:action.payload
            }
        case actionTypes.LOGOUT:
            return{
              ...initialstate,
              isLogin:false,
              Patient:null,
              Laborant:null
            }
        default:
          return initialstate;
        }
}
