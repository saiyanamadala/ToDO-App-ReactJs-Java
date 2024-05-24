
import './ToDoApp.css'
import { BrowserRouter, Routes, Route,  Navigate } from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ToDoComponent from './ToDoComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider from './security/AuthContext'
import { useAuth } from './security/AuthContext'



function AuthenticatedRoute({ children }) {
    const auth = useAuth()
    if (auth.isAuthenticated) {
        return children
    }
    else {
        return <Navigate to='/'></Navigate>
    }


}

export default function ToDoApp() {
    return (
        <div className="ToDoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent></HeaderComponent>
                    <Routes>
                        <Route path="/" element={<LoginComponent />}></Route>
                        <Route path="/login" element={<LoginComponent />}></Route>
                        <Route path="/welcome/:username" element={
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute>
                        }></Route>
                        <Route path="*" element={
                            <AuthenticatedRoute>
                                <ErrorComponent />
                            </AuthenticatedRoute>

                        }></Route>
                        <Route path='/todos' element={
                            <AuthenticatedRoute> 
                                <ToDoComponent />
                            </AuthenticatedRoute>
                        }></Route>
                        <Route path='/logout' element={<LogoutComponent />}></Route>
                    </Routes>

                </BrowserRouter>
            </AuthProvider>

        </div>
    )
}











