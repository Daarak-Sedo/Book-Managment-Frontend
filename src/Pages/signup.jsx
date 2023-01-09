import React, { useState } from "react"
import { Link } from "react-router-dom"
import './signup.css'


const SignUp = () => {

    return (

        <div className="signup">
            <h3>
                SignUp
            </h3>

            <div className="signup-input">
                <label>fname: </label>
                <input type='text' placeholder="fname" /><br />
                <label>lname: </label>
                <input type='text' placeholder="lname" /><br />
                <label>email: </label>
                <input type='email' placeholder="email" /><br />
                <label>phone: </label>
                <input type='tel' placeholder="Phone" /><br />
                <label>Password: </label>
                <input type='password' placeholder="Password" /><br /><br />

                <Link to="/login" >
                    <button>SignUp</button>
                </Link>

            </div>




        </div>
    )

}

export default SignUp