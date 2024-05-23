function ToDoComponent(){
    const today=new Date()
    const targetDate=new Date(today.getFullYear()+1,today.getMonth(),today.getDay())

    const todos=[{id:1, description: 'Complete Java Course',done: false, targetDate:targetDate},
                {id:2, description: 'Complete Java Course',done: false, targetDate:targetDate},
                {id:3, description: 'Complete Java Course',done: false, targetDate:targetDate}
                ]   
    return(
        <div className="container">
            <h1>ToDO Component</h1>
            <table className="table">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Description</td>
                        <td>Done</td>
                        <td>Target Date</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo=>(
                                <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toDateString()}</td>
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