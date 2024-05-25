import { createContext, useContext, useState } from "react";


export const auth=createContext()

export const useAuth=()=>useContext(auth)


export default function AuthProvider({children}){
    
    const [isAuthenticated,setAuthenticated] = useState(false)
    const [username,setUsername]=useState(null)

    function login(username,password){
        if(username==='sai' && password==='dummy'){
            setUsername(username)
            setAuthenticated(true)
            return true
        }
        else{
            setAuthenticated(false)
            setUsername(null)
            return false
        }
    }

    function logout(){
        setAuthenticated(false)
    }

    return(
        <auth.Provider value={{isAuthenticated,login,logout,username}}>
            {children}
        </auth.Provider>
    )
}