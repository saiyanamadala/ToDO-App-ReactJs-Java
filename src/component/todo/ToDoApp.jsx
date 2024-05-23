import { useState } from 'react'
import './ToDoApp.css'


export default function ToDoApp(){
    return(
        <div className="ToDoApp">
            ToDo App
            <LoginComponent/>
            <WelcomeComponent/>
        </div>
    )
}

function LoginComponent(){
    const [username,setUserName] =useState("")

    function handleUserNameChange(event){
        setUserName(event.target.value)
    }

    return(
        <div className="Login">
            <div class="loginForm">
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUserNameChange}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password"></input>
                </div>
                <div>
                    <button type="button">Login</button>
                </div>

            </div>
        </div>
    )
}

function WelcomeComponent(){
    return(
        <div className="Welcome">
            Welcome Components
        </div>
    )
}