import React, { useState } from "react";
import style from './Login.module.css'
export const Login = () => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }


  return(
    <div className={style.containerLogin}>
        <h1>Login</h1>
        <form>
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
