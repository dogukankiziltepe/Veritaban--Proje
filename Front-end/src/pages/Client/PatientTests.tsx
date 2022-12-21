import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import * as patientTestService from "../../services/patientTestServices"
import * as patientTestActions from "../../store/actions/patientActions"
import { PatientTest } from '../../store/dataModels';
export default function PatientTests() {
    const PatientTests = useSelector((state: any) => state.patientReducer.PatientTests);
    console.log(PatientTests)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectTest = (test:PatientTest) => {
        dispatch(patientTestActions.SetPatientSelectedTest(test))
        navigate("/testdetail");
    }
    console.log(PatientTests)
    useEffect(() => {
        patientTestService.getPatientTests().then(res => res.data).then(data => dispatch(patientTestActions.SetPatientTests(data)));
    }, [])
    return (
        <div className="container">
            <h2 className="mt-3">Testler</h2>
            <Link to="/AddPatientTest" className="btn btn-primary float-left mt-3">Test Ekle</Link>
            <div className="mt-3">

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">İsim-Soyisim</th>
                            <th scope="col">Test</th>
                            <th scope="col">Detay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {PatientTests ? PatientTests.length > 0 ? PatientTests.map((test: PatientTest) => <tr>
                            <th scope="row">{test.Id}</th>
                            <td>{test.Patient.Name} {test.Patient.Surname}</td>
                            <td>{test.Test.Name}</td>
                            <td><button className="btn btn-info" onClick={() => selectTest(test)}>Detay</button></td>
                        </tr>) : null : null}
                    </tbody>
                </table>

            </div>
        </div>
    )
}
