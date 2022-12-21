import React from 'react'
import { useSelector } from 'react-redux';
import { TestProperty } from '../../store/dataModels'

export default function TestDetail(props: any) {
    const SelectedTest = useSelector((state: any) => state.testReducer.SelectedTest);

    return (
        <div className="container">
            <h3 className="mt-3">{SelectedTest.Name}</h3>
            <h4 className="mt-3">Test Özellikleri:</h4>
            <div className="mt-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">İsim</th>
                            <th scope="col">Birim</th>
                            <th scope="col">Minimum Değer</th>
                            <th scope="col">Maksimum Değer</th>
                        </tr>
                    </thead>
                    <tbody>


                        {SelectedTest.TestProperties.length > 0 ? SelectedTest.TestProperties.map((testProperty: TestProperty, index: number) =>
                            <tr>
                                <td>{testProperty.Name}</td>
                                <td>{testProperty.Unit}</td>
                                <td> {testProperty.ReferenceMin}</td>
                                <td> {testProperty.ReferenceMax}</td>
                            </tr>
                        ) : null}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
