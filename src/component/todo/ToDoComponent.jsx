import { useEffect, useState } from "react"
import { retrieveTodosForUsername, deleteTodo } from "./Api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"

function ToDoComponent(){
    const today=new Date()
    const targetDate=new Date(today.getFullYear()+1,today.getMonth(),today.getDay())

    const [todos,setTodos]=useState([])
    const [message,setMessage]=useState(null)

    const auth=useAuth()
    const username=auth.username

    const navigate=useNavigate()

    // const todos=[{id:1, description: 'Complete Java Course',done: false, targetDate:targetDate},
    //             {id:2, description: 'Complete Java Course',done: false, targetDate:targetDate},
    //             {id:3, description: 'Complete Java Course',done: false, targetDate:targetDate}
    //             ]   

    useEffect(
        ()=>refreshTodos(),[]
    )

    function refreshTodos(){
        retrieveTodosForUsername(username)
        .then(response=>{
            //console.log(response.data);
            setTodos(response.data)
        })
            
        .catch(error=>console.log(error))
        .finally('done')
    }

    function deleteTodos(id){
        //console.log(`deleted ${id}`);
        deleteTodo(username,id)
        .then(
            ()=>{
                setMessage(`Deleted Todo with id: ${id}`)
                refreshTodos()
            }
        )
        .catch(error=>console.log(error))
        .finally('done')
    }

    function updateTodos(id){
        
        console.log('updated')
        navigate(`/update/${id}`)
    }

    return(
        <div className="container">
            <h1>ToDO Component</h1>
            {message&&<div className="alert alert-warning">{message}</div>}
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Done</th>
                        <th>Target Date</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo=>(
                                <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                {/* <td>{todo.targetDate.toDateString()}</td> */}
                                <td>{todo.targetDate.toString()}</td>
                                <td><button className="btn btn-success" onClick={()=>updateTodos(todo.id)}>Update</button></td>
                                <td><button className="btn btn-warning" onClick={()=>deleteTodos(todo.id)}>Delete</button></td>
                            </tr>
                            )
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ToDoComponent