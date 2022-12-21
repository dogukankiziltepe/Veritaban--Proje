
import {combineReducers} from "redux"
import authReducer from './authReducer'
import patientReducer from './patientReducer'
import testReducer from './testReducer'


const rootreducer = combineReducers({
    authReducer,
    patientReducer,
    testReducer
})

export default rootreducer;