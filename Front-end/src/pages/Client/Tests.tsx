import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as testService from '../../services/testService'
import * as testActions from '../../store/actions/testActions'
import { Test } from "../../store/dataModels"
export default function Tests() {
    const Tests = useSelector((state: any) => state.testReducer.Tests);
    console.log(Tests)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectTest = (test:Test) => {
        dispatch(testActions.SetSelectedTest(test))
        navigate("/testdetail");
    }
    useEffect(() => {
        testService.getTests().then(res => res.data).then(data => dispatch(testActions.SetTests(data)));
    }, [])
    return (
        <div className="container">
            <h2 className="mt-3">Testler</h2>
            <Link to="/AddTest" className="btn btn-primary float-left mt-3">Test Ekle</Link>
            <div className="mt-3">

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">İsim</th>
                            <th scope="col">Detay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Tests ? Tests.length > 0 ? Tests.map((test: Test) => <tr>
                            <th scope="row">{test.Id}</th>
                            <td>{test.Name}</td>
                            <td><button className="btn btn-info" onClick={() => selectTest(test)}>Detay</button></td>
                        </tr>) : null : null}
                    </tbody>
                </table>

            </div>
        </div>
    )
}
