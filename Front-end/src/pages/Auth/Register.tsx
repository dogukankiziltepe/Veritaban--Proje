import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import * as authService from "../../services/authService"
export default function Register() {
    const [User, setUser] = useState({
        Name:"",
        EMail:"",
        Surname:"",
        Password:""
    })
    const [isLaborant,setisLaborant] = useState(false)
    const navigate = useNavigate();
    const onChangeState = (text:any,property:string) => {
        setUser({...User, [property]:text})
    }

    const submitRegister = async () => {
        if(isLaborant){
            var a = await authService.RegisterLaborant(User)
            if(a === true){
                navigate("/")
            }
        }
        else{
            var a = await authService.RegisterPatient(User)
            if(a === true){
                navigate("/")            
            }
            
        }
    }

    return (
        <div className="container justify-content-center">
            <img width={300} height={300} src={require("../../assets/icon.jpeg")} />

            <div className="col-12 justify-content-center">
                <div className="row justify-content-center">
                <h6 className="col-12">İsim</h6>
                <input className="form-control col-4 ml-4" type="text" onChange={(event) => onChangeState(event.target.value,"Name")}/>
                </div>
                <div className="row mt-2 justify-content-center">
                <h6 className="col-12">Soyad</h6>
                <input className="form-control col-4 ml-4" type="text" onChange={(event) => onChangeState(event.target.value,"Surname")}/>
                </div>
                <div className="row mt-2 justify-content-center">
                <h6 className="col-12">EMail</h6>
                <input className="form-control col-4 ml-4" type="text" onChange={(event) => onChangeState(event.target.value,"EMail")}/>
                </div>
                <div className="row mt-2 justify-content-center">
                <h6 className="col-12">Password</h6>
                <input className="form-control col-4 ml-4" type="text" onChange={(event) => onChangeState(event.target.value,"Password")}/>
                </div>
                <div className="row mt-4 justify-content-center">
                    <span className="col-2">Laborant</span>
                    <input className="form-control col-1" type="radio" checked={isLaborant} value="Laborant" name="set" onChange={(event) => setisLaborant(event.target.value === "Laborant" ? true : false)}/>
                    <span className="col-2">Hasta</span>
                    <input className="form-control col-1" type="radio" checked={!isLaborant} value="Hasta" name="set" onChange={(event) => setisLaborant(event.target.value === "Laborant" ? true : false)}/>
                </div>
                <button className="btn btn-success mt-4" type="button" onClick={() => submitRegister()}> Kayıt Ol</button>
            </div>
            <Link to="/">Zaten hesabınız var mı?</Link>
        </div>
    )
}
