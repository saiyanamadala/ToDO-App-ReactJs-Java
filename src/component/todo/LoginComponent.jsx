import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
            navigate(`/welcome/${username}`)
        }
        else{
            setLoginFail(true)
            setLoginSuccess(false)
        }
    }


    return(
        <div className="Login">
            <div className="loginForm">
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

export default LoginComponent