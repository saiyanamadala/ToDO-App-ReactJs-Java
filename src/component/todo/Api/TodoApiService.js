import axios from "axios";

export const apiClient=axios.create(
    {
        baseURL:'http://localhost:8080'
    }
);

// export const retrieveTodosForUsername=(username,token)=>apiClient.get(`/users/${username}/todos`,{
//     headers:{
//         Authorization: token
//     }
// })

export const retrieveTodosForUsername=(username)=>apiClient.get(`/users/${username}/todos`)

// export const executeBasicAuthenticationService
//     = (token) => apiClient.get(`/basic`,{
//         headers: {
//             Authorization: token
//         }
//     })

export const executeJWTAuthenticationService
    = (username,password) => apiClient.post(`/authenticate`,{
        username,password
    })


export const deleteTodo=(username,id)=>apiClient.delete(`/users/${username}/todos/${id}`)

export const retrieveTodo=(username,id)=>apiClient.get(`/users/${username}/todos/${id}`)

export const updateTodoApi
    = (username, id, todo) => apiClient.put(`/users/${username}/todos/${id}`, todo)

    export const createTodoApi
    = (username, todo) => apiClient.post(`/users/${username}/todos`, todo)