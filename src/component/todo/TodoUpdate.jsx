import { useParams } from "react-router-dom"
import { retrieveTodo } from "./Api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"

export default function TodoUpdate(){

    const {id}= useParams()
    const auth=useAuth()
    const username=auth.username

    const [description,setDescription]=useState('')
    const [targetDate,setTargetDate]=useState(null)

    useEffect(
        ()=>retrieveTodos(),[id]
    )

function retrieveTodos(){
    retrieveTodo(username,id)
    .then(response=>{
        //console.log(response)
        setDescription(response.data.description)
        setTargetDate(response.data.targetDate)
    })
    .catch(error=>console.log(error))
    .finally('clean')
}

function onSubmit(values){
    console.log(values)
}

function validate(values) {
    let errors = {
        // description: 'Enter a valid description',
        // targetDate: 'Enter a valid target date'
    }

    if(values.description.length<5) {
        errors.description = 'Enter atleast 5 characters'
    }

    if(values.targetDate == null) {
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