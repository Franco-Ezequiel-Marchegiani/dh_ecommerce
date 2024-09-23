import React, { useState } from "react";
import style from './Login.module.css'
import { useNavigate } from "react-router-dom";
export const Login = () => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    
    const navigate = useNavigate()

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log("Hola");
        console.log(e);

        //Validamos que no esté vacía la info
        if(userData.email.trim() === '' || userData.password.trim() === ''){
            return;
        }
        //Guardamos el mail en el Storage para validación
        localStorage.setItem(
            "userLogin",
            JSON.stringify(userData.email)
        )
        //Envía al usuario al Dashboard
        navigate('/dashboard')
    }


  return(
    <div className={style.containerLogin}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className={style.formControlLogin}>
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleOnChange} />
            </div>
            {/* Password */}
            <div className={style.formControlLogin}>
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    value={userData.password}
                    onChange={handleOnChange} />
            </div>
            <div className={style.formControlLogin}>
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
  );
};
