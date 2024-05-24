import { createContext, useContext, useState } from "react";


export const auth=createContext()

export const useAuth=()=>useContext(auth)

export default function AuthProvider({children}){
    
    const [isAuthenticated,setAuthenticated] = useState(false)

    function login(username,password){
        if(username==='sai' && password==='dummy'){
            setAuthenticated(true)
            return true
        }
        else{
            setAuthenticated(false)
            return false
        }
    }

    function logout(){
        setAuthenticated(false)
    }

    return(
        <auth.Provider value={{isAuthenticated,login,logout}}>
            {children}
        </auth.Provider>
    )
}