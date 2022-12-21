import * as actionTypes from './actionTypes'
import * as model from "../dataModels"

export function SetTests(payload : model.Test[]  ){
    return {
        type: actionTypes.GET_TESTS,
        payload,
      };
}

export function SetTestProperties(payload: model.TestProperty[]){
    return{
        type: actionTypes.GET_TESTPROPERTIES,
        payload
    }
}

export function SetSelectedTest(payload:model.Test){
    return{
        type:actionTypes.SET_SELECTED_TEST,
        payload
    }
}