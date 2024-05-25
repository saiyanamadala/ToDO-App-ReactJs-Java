import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {retrieveHelloWorld} from "./Api/HelloWorldApiService";

function WelcomeComponent(){

    const {username}= useParams()
    const [message,setMessage]=useState(null)
    
    function callHelloWorld(){
        console.log('Hello world');
        retrieveHelloWorld()
        .then((response)=>successfulResponse(response) )
        .catch((error)=>errorResponse(error))
        .finally(console.log('clean up'))
    }

    function successfulResponse(response){
        setMessage(response.data)
        console.log(response)
    }

    function errorResponse(error){
        console.log(error)
    }

    return(
        <div className="Welcome">
           <h1>Welcome {username}</h1> 
           <div>
                Manage ToDos- <Link to="/todos">Link</Link>
           </div>
           <div >
                <button className="btn btn-success m-5" onClick={callHelloWorld}>
                    Call Hello World
                </button>
           </div>
           <div className="text-info">
                {message}
           </div>
        </div>
    )
}
export default WelcomeComponent