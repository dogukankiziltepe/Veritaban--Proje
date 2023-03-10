import {createStore, applyMiddleware} from "redux"
import rootReducer from "./index"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"

export default function configureStore(){
    return createStore(rootReducer)
}