import React, { useState } from 'react'

export default function TestPropertyItem(props:any) {
    const [testProperty, settestProperty] = useState({
        index:props.testProperty.index,
        Name:"",
        Unit:"",
        ReferenceMax:0,
        ReferenceMin:0
    })

    const onChangeState = (text:any,property:string) => {
        settestProperty({...testProperty, [property]:text})
        var copy = props.properties;
        var listProp = copy.filter((x: { index: any; }) => x.index === testProperty.index)[0];
        var propIndex = copy.indexOf(listProp)
        copy[propIndex][property]=text;
        props.setProperties(copy)
    }

    return (
        <div className="float-left mt-3 p-2 col-9 border border-info rounded">
            <div className="row">
            <span className="col-5">Özellik Adı</span>
            <input className="form-control col-5" type="text" onChange={(event) => onChangeState(event.target.value,"Name")}/>
            </div>
            <div className="row mt-3">
            <span className="col-5">Birim</span>
            <input className="form-control col-5" type="text" onChange={(event) => onChangeState(event.target.value,"Unit")}/>
            </div>
            <div className="row mt-3">
            <span className="col-5">Referans Max</span>
            <input className="form-control col-5" type="text" onChange={(event) => onChangeState(parseInt(event.target.value),"ReferenceMax")}/>
            </div>
            <div className="row mt-3">
            <span className="col-5">Referans Min</span>
            <input className="form-control col-5" type="text" onChange={(event) => onChangeState(parseInt(event.target.value),"ReferenceMin")}/>
            </div>
        </div>
    )
}
