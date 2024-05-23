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
    return(
        <div className="Login">
            <div class="loginForm">
                <div>
                    <label>Username</label>
                    <input type="text" name="username"></input>
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
            Welcome Component
            <label>Hi</label>
        </div>
    )
}