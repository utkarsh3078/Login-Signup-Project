import React from "react"
import { link } from "react-router-dom"
import {ToastContainer} from "react-toastify"

function Signup(){
    return(
        <div class="constainer">
            <h1>Signup</h1>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        name="name"
                        autoFocus
                        placeholder="Enter your name"
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                    />
                </div>

                <div>
                    <label htmlFor="password">password</label>
                    <input 
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                    />
                </div>
                <button>Signup</button>
                <span>Aready have an account?
                    <a href="/login">Login</a>
                </span>
            </form>
            <ToastContainer />
        </div>
    )
}
export default Signup