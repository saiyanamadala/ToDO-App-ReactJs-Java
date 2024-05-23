import { useParams, Link } from "react-router-dom";

function WelcomeComponent(){
    const {username}= useParams()
    console.log(username);
    return(
        <div className="Welcome">
           <h1>Welcome {username}</h1> 
           <div>
                Manage ToDos- <Link to="/todos">Link</Link>
           </div>
        </div>
    )
}
export default WelcomeComponent