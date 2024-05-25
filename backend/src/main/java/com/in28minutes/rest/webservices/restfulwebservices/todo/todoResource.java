package com.in28minutes.rest.webservices.restfulwebservices.todo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
public class todoResource {

    private TodoService todoservice;

    public todoResource(TodoService todoservice) {
        this.todoservice = todoservice;
    }

    @GetMapping(path = "/users/{username}/todos")
    public List<Todo> retreiveTodos(@PathVariable String username){
       return todoservice.findByUsername(username);
    }

    @GetMapping(path = "/users/{username}/todos/{id}")
    public Todo findTodos(@PathVariable String username,@PathVariable int id){
        return todoservice.findById(id);
    }

    @DeleteMapping(path = "/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodos(@PathVariable String username, @PathVariable int id){
        todoservice.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(path = "/users/{username}/todos/{id}")
    public Todo updateTodos(@PathVariable String username, @PathVariable int id,@RequestBody Todo todo){
        todoservice.updateTodo(todo);
        return todo;
    }

    @PostMapping(path = "/users/{username}/todos")
    public Todo createTodos(@PathVariable String username,@RequestBody Todo todo){
        Todo newTodo =todoservice.addTodo(username,todo.getDescription(),todo.getTargetDate(),todo.isDone());
        return newTodo;
    }
}
