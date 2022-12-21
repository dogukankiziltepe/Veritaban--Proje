import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as authService from "../../services/authService"
import * as authActions from "../../store/actions/authActions"
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';




export default function LaborantLogin(props:any) {
    const [User, setUser] = useState({
        Password:"",
        EMail:"",
    })
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitLogin = async () => {
            var a = authService.LoginLaborant(User)
           a.then(res => res?.data).then(data => {
               dispatch(authActions.SetLaborant(data))
            })
    }
    const onChangeState = (text:any,property:string) => {
        setUser({...User, [property]:text})
    }
    return (
        <div className=" container">
             <div className="col-12">
                 <h2>Laborant Girişi</h2>
                <div className="row justify-content-center">
                    <span className="col-12">E-Posta</span>
                    <input className="form-control col-6" type="text" onChange={(event) => onChangeState(event.target.value,"eMail")} />
                </div>
                <div className="row justify-content-center"> 
                    <span className="col-12">Parola</span>
                    <input className="form-control col-6" type="text" onChange={(event) => onChangeState(event.target.value,"password")} />
                </div>
                <h5 onClick={() => props.setIsLaborant()}>Hasta mısınız? Burayı tıklayarak giriş yapabilirsiniz.</h5>
            </div>
            <button className="btn btn-success mt-4" type="button" onClick={() => submitLogin()}> Kayıt Ol</button>

        </div>
    )
}
