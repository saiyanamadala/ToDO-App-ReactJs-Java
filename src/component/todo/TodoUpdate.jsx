import { useParams } from "react-router-dom"
import { retrieveTodo } from "./Api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useNavigate } from "react-router-dom"
import { updateTodoApi } from "./Api/TodoApiService"
import { createTodoApi } from "./Api/TodoApiService"
import moment from 'moment'

export default function TodoUpdate(){

    const {id}= useParams()
    const auth=useAuth()
    const username=auth.username

    const [description,setDescription]=useState('')
    const [targetDate,setTargetDate]=useState(null)

    const navigate=useNavigate()
    
    useEffect(
        ()=>retrieveTodos(),[id]
    )

function retrieveTodos(){
    if(id!==-1){
    retrieveTodo(username,id)
    .then(response=>{
        //console.log(response)
        setDescription(response.data.description)
        setTargetDate(response.data.targetDate)
    })
    .catch(error=>console.log(error))
    .finally('clean')
}
}

function onSubmit(values){
    
    console.log(values)
    const todo = {
        id: id,
        username: username,
        description: values.description,
        targetDate: values.targetDate,
        done: false
    }
    
    console.log(todo)

    if(id===-1){
        createTodoApi(username, todo)
        .then(response => {
        
            navigate('/todos')
        })
        .catch(error => console.log(error))
    }
    else{
    updateTodoApi(username, id, todo)
    .then(response => {
        
        navigate('/todos')
    })
    .catch(error => console.log(error))
}
}

function validate(values) {
    let errors = {
        // description: 'Enter a valid description',
        // targetDate: 'Enter a valid target date'
    }

    if(values.description.length<5) {
        errors.description = 'Enter atleast 5 characters'
    }

    if(values.targetDate === null || values.targetDate==='' ||!moment(values.targetDate).isValid()) {
        errors.targetDate = 'Enter a target date'
    }

    console.log(values)
    return errors
}

    return(
        <div className="container">
            <h1>Enter ToDo details</h1>
            <Formik initialValues={ { description, targetDate } } 
                    enableReinitialize = {true}
                    onSubmit = {onSubmit}
                    validate = {validate}
                    validateOnChange={false}
                    validateOnBlur={false}
            >
                {
                    (props)=>(
                        <Form>
                            <ErrorMessage
                            name="description"
                            component="div"
                            className="alert alert-warning"
                            />
                            <ErrorMessage 
                                name="targetDate"
                                component="div"
                                className = "alert alert-warning"
                            />

                           <fieldset className="form-group">
                                <label>Description</label>
                                <Field type="text" className="form-control" name="description"/>
                           </fieldset>
                           <fieldset className="form-group">
                                <label>TargetDate</label>
                                <Field type="date" className="form-control" name="targetDate"/>
                           </fieldset>
                           <div>
                            <button className="btn btn-success m-5" type="submit">Save</button>
                           </div>
                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}