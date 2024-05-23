
import './ToDoApp.css'
import { BrowserRouter, Routes,Route, useNavigate, useParams, Link} from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ToDoComponent from './ToDoComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'


export default function ToDoApp(){
    return(
        <div className="ToDoApp">
           
            <BrowserRouter>
                <HeaderComponent></HeaderComponent>
                <Routes>
                    <Route path="/" element={<LoginComponent/>}></Route>
                    <Route path="/login" element={<LoginComponent/>}></Route>
                    <Route path="/welcome/:username" element={<WelcomeComponent/>}></Route>
                    <Route path="*" element={<ErrorComponent/>}></Route>
                    <Route path='/todos' element={<ToDoComponent/>}></Route>
                    <Route path='/logout' element={<LogoutComponent/>}></Route>
                </Routes>
                
            </BrowserRouter>
            
        </div>
    )
}











