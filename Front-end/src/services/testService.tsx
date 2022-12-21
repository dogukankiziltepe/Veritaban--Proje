import * as httpClient from '../api/httpClient'
import * as model from "../store/dataModels"
import * as testActions from "../store/actions/testActions"

export async function getTests(){
    var response = await httpClient.Get("/test/");
    return response;
}

export function setSelectedTest(test:model.Test){
    return async (dispatch:any) => {
        dispatch(testActions.SetSelectedTest(test))
    }
}

export async function addTest(test:model.Test){
    var response = await httpClient.Post(test,"/test/").then(res => {
        console.log("bua",res)

        if(res.data !== null){
            test.TestProperties.forEach(async element => {
                console.log("bua")
                element.TestId = res.data.Id
                var response2 = await httpClient.Post(element,"/testproperty/").then(() => {

                })
            });
            return res;
        }
    })
}
