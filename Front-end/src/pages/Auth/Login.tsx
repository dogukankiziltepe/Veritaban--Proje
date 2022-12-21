import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LaborantLogin from './LaborantLogin'
import PatientLogin from './PatientLogin'

export default function Login() {
    const [isLaborant, setisLaborant] = useState(false)
    return (
        <div className="container">
            <img width={300} height={300} src={require("../../assets/icon.jpeg")} />
           {isLaborant === true ? <LaborantLogin setIsLaborant={() => setisLaborant(false)}/>: <PatientLogin setIsLaborant={() => setisLaborant(true)}/>}
           <Link to="/register">Kayıt olmak için tıklayınız</Link>
        </div>
    )
}
