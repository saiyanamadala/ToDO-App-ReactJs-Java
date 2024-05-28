import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './security/AuthContext'

function LoginComponent(){
    const [username,setUserName] =useState("")
    const [password,setPassword]=useState("")
    const [loginFail,setLoginFail]=useState(false)
    const navigate=useNavigate()
    const auth=useAuth()

    function handleUserNameChange(event){
        setUserName(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    async function handleLogin(){
        if(await auth.login(username,password)){
            
            navigate(`/welcome/${username}`)
        }
        else{
            setLoginFail(true)
        }
    }


    return(
        <div className="Login">
            <div className="loginForm">
                
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