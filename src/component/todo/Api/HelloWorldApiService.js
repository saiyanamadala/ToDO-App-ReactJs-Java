import axios from "axios";

// export default function retrieveHelloWorld(){
//     return axios.get('http://localhost:8080/hello-world');
// }

const apiClient=axios.create(
    {
        baseURL:'http://localhost:8080'
    }
);

export const retrieveHelloWorld=()=>apiClient.get('/hello-world')