import { useState } from 'react'
import './ToDoApp.css'
import { BrowserRouter, Routes,Route, useNavigate} from 'react-router-dom'


export default function ToDoApp(){
    return(
        <div className="ToDoApp">
           
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent/>}></Route>
                    <Route path="/login" element={<LoginComponent/>}></Route>
                    <Route path="/welcome" element={<WelcomeComponent/>}></Route>
                    <Route path="*" element={<ErrorComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent(){
    const [username,setUserName] =useState("")
    const [password,setPassword]=useState("")
    const [loginSuccess,setLoginSuccess]=useState(false)
    const [loginFail,setLoginFail]=useState(false)
    const navigate=useNavigate()

    function handleUserNameChange(event){
        setUserName(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleLogin(){
        if(username==='sai' && password==='dummy'){
            setLoginSuccess(true)
            setLoginFail(false)
            navigate('/welcome')
        }
        else{
            setLoginFail(true)
            setLoginSuccess(false)
        }
    }


    return(
        <div className="Login">
            <div class="loginForm">
                {loginSuccess&&<div>Login Success</div>}
                {loginFail&&<div>Login Failed</div>}
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUserNameChange}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}></input>
                </div>
                <div>
                    <button type="button" onClick={handleLogin}>Login</button>
                </div>

            </div>
        </div>
    )
}




function WelcomeComponent(){
    return(
        <div className="Welcome">
           <h1>Welcome Components</h1> 
        </div>
    )
}

function ErrorComponent(){
    return(
        <h1>Page Not Found</h1>
    )
}