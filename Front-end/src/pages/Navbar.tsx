import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {Logout} from "../store/actions/authActions"
export default function Navbar() {
    const isLogin = useSelector((state:any) => state.authReducer.isLogin);
    const Laborant = useSelector((state:any) => state.authReducer.Laborant);
    const Patient = useSelector((state:any) => state.authReducer.Patient);
    const dispatch = useDispatch()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">LabOn</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                {Laborant === null && Patient === null  ?  <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Giriş Yap <span className="sr-only">Giriş Yap</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/register">Kayıt Ol <span className="sr-only">Kayıt Ol</span></Link>
                    </li>
                    
                </ul>: Laborant !== null ? <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Anasayfa <span className="sr-only">Anasayfa</span></Link>
                    </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Tests">Testler<span className="sr-only">Testler</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/PatientTests">Hasta Testleri <span className="sr-only">Hasta Testleri</span></Link>
                    </li>
                    <li className="nav-item">
                                <button className="btn nav-link" onClick={() => dispatch(Logout())}>Çıkış Yap<span className="sr-only">Çıkış Yap</span></button>
                            </li>
                    </ul>:
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Ana Sayfa <span className="sr-only">Ana sayfa</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/PatientTests/"+Patient.id}>Testlerim <span className="sr-only">Testlerim</span></Link>
                        </li>
                        <li className="nav-item">
                                <button className=" btn nav-link" onClick={() => dispatch(Logout())}>Çıkış Yap<span className="sr-only">Çıkış Yap</span></button>
                            </li></ul>}
            </div>
            </nav>
        </div>
    )
}
