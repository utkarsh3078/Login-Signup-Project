import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

function Home(){
    const [loggedInUser, setLoggedInUser] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        setLoggedInUser(localStorage.getItem("loggedInUser"))
    }, []);
    const handleLogout = (e)=>{
        localStorage.removeItem("token");
        localStorage.removeItem("loggedInUser");
        handleSuccess("User Loggedout");
        setTimeout(()=>{
            navigate("/login")
        }, 1000)
    }
    return(
        <div class="container">
            <div class="logo1">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-k200y r-1nao33i r-5sfk15 r-kzbkwu"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
            </div>
            <div class="form">
            <h1>{loggedInUser}</h1>
            <button onClick={handleLogout} class="logout">Logout</button>
            </div>

            <ToastContainer />
        </div>
    )
}
export default Home 