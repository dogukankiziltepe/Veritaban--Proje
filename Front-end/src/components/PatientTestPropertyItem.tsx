import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import * as model from "../store/dataModels"


export default function PatientTestPropertyItem(props:any) {

    return (
        <div className="justify-content-center mt-3">
            <div className="row">
                <span className="col-2">{props.patientTestProperty.Name}</span>
                <input className="col-2 ml-2 form-control" type="number" onChange={(e) => props.valueChange(props.patientTestProperty.TestPropertyId,parseInt(e.target.value)) }/>
                <span className="col-1 ml-2">{props.patientTestProperty.Unit}</span>
            </div>
        </div>
    )
}
