import React, { useState } from "react"
import { Link } from "react-router-dom"
import './login.css'


const Login = () => {

    return (

        <div className="login">
            <h3>
                Login
            </h3>

            <div className="login-input">

                <label>email: </label>
                <input type='email' placeholder="email" /><br />
                <label>Password: </label>
                <input type='password' placeholder="Password" /><br /><br />

                <Link to="/getBook" >
                    <button>Login</button>
                </Link>

            </div>

        </div>

    )

}

export default Login