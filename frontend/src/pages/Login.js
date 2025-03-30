import React, {useState} from "react"
import { link, useNavigate } from "react-router-dom"
import {ToastContainer} from "react-toastify"
import { handleError, handleSuccess } from "../utils"

function Login(){

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();
    const handleChange = (e)=>{
        const {name, value} = e.target;
        console.log(name,value);
        const copyLoginInfo = {...loginInfo};
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }

    const handleLogin = async(e)=>{
        e.preventDefault();
        const {email, password} = loginInfo;
        if(!email || !password){
            return handleError("Please fill all the fields");
        } 
        try{
            const url = "http://localhost:8080/auth/login"; 
            const response = await fetch(url,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            console.log(result);
            const { success, message, jwtToken, name, error } = result;
            if(success){
                handleSuccess(message);
                localStorage.setItem("token", jwtToken);
                localStorage.setItem("loggedInUser", name);
                setTimeout(()=>{
                    navigate("/home")
                }, 1000)
            }else if(error){
                const details = error?.details[0].message;
                handleError(details);
            }else if(!success){
                handleError(message);
            }
        }catch(err){
            handleError(err);
        }
    }
    return(
        <div class="container">
            <div class="logo">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-k200y r-1nao33i r-5sfk15 r-kzbkwu"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
            </div>
            <div class="form">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        value={loginInfo.email}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        onChange={handleChange}
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={loginInfo.password}
                    />
                </div>
                <button>Login</button>
                <span>Don't have account?
                    <a href="/signup">Signup</a>
                </span>
            </form>
            <ToastContainer />
            </div>
            
        </div>
    )
}
export default Login