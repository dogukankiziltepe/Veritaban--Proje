import React, { useState } from 'react'
import TestPropertyItem from '../../components/TestPropertyItem';
import { TestProperty } from '../../store/dataModels';
import * as testService from "../../services/testService"
import { useNavigate } from 'react-router-dom';
export default function AddTest() {
    const [name, setName] = useState("");
    const [properties, setProperties] = useState([{
        index: 0,
        Name: "",
        Unit: "",
        ReferenceMax: 0,
        ReferenceMin: 0
    }]);
    const [deletedProperties,setDeletedProperties] = useState([{
        index: -1,
        Name: "",
        Unit: "",
        ReferenceMax: 0,
        ReferenceMin: 0
    }]);
    const navigate = useNavigate();
    const saveTest = async () => {
        await testService.addTest({
            Name: name,
            TestProperties: properties
        });
        navigate("/tests")
    }
    console.log(properties)
    const deleteProperty = (index: number) => {
        var copy = properties;
        var deleted = copy.splice(index, 1)[0]
        setProperties(copy)
        setDeletedProperties([...deletedProperties,deleted])
    }
    return (
        <div className="container">
            <h4 className="mt-3">Test Ekle</h4>
            <div className="row">
                <span>İsim</span>
                <input type="text" className="form-control col-3 ml-3" onChange={(event) => setName(event.target.value)} />
            </div>
            <div className="row col-6 mt-4">
                <button onClick={() => {
                    setProperties([...properties, {
                        index: properties.length,
                        Name: "",
                        Unit: "",
                        ReferenceMax: 0,
                        ReferenceMin: 0
                    }])
                }} className="btn btn-success col-1">+</button>
            </div>
            <div className="row mt-4">
                {properties.map((testProperty: TestProperty, _index) => {
                    if(deletedProperties.some(x=> x.index === testProperty.index))
                        return null

                    else
                        return (
                        <div key={testProperty.index} className=" col-4 row ">
                            <TestPropertyItem setProperties={setProperties} properties={properties} testProperty={testProperty} />
                            <button className="btn btn-danger ml-1 mt-2 col-2 h-25 rounded-circle" onClick={() => {
                                deleteProperty(testProperty.index ? testProperty.index : -1)
                            }}>-</button>
                        </div>)
                })}
            </div>
            <button className="btn btn-primary mt-3" onClick={() => saveTest()}>Kaydet</button>
        </div>
    )
}
