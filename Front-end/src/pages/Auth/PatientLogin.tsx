import React from 'react'

export default function PatientLogin(props:any) {
    return (
    <div>
        <div>
        <h2>Hasta Girişi</h2>
                <div className="row justify-content-center mt-3">
                    <span className="col-12">E-Posta</span>
                    <input className="form-control col-6" type="text" />
                </div>
                <div className="row justify-content-center mt-3"> 
                    <span className="col-12">Parola</span>
                    <input className="form-control col-6" type="text" />
                </div>
           <h5 className="mt-3" onClick={() => props.setIsLaborant()}>Laborant mısınız? Burayı tıklayarak giriş yapabilirsiniz.</h5>
       </div>
   </div>
    )
}
