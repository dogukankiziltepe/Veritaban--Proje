import * as actionTypes from "../actions/actionTypes"
import { Test } from "../dataModels";

interface state{
    SelectedTest: Test|null,
  }
  
const TestinitialState:state={
    SelectedTest:null,
}

export default function testReducer(initialstate = TestinitialState, action: { type: any; payload: any; }){
    switch (action.type) {
        case actionTypes.GET_TESTS:
          return{
              ...initialstate,
              Tests:action.payload
            };
        case actionTypes.SET_SELECTED_TEST:
            return{
                ...initialstate,
                SelectedTest:action.payload
            }
        default:
            return initialstate;
    }
}
