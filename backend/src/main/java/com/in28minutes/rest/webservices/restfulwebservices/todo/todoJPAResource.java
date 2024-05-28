package com.in28minutes.rest.webservices.restfulwebservices.todo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.in28minutes.rest.webservices.restfulwebservices.todo.repo.TodoRepository;

import java.util.List;
import java.util.Optional;



@RestController
public class todoJPAResource {

    private TodoService todoservice;
    
    private TodoRepository todorepo;

    public todoJPAResource(TodoService todoservice, TodoRepository todorepo) {
        this.todoservice = todoservice;
        this.todorepo=todorepo;
    }

    @GetMapping(path = "/users/{username}/todos")
    public List<Todo> retreiveTodos(@PathVariable String username){
       //return todoservice.findByUsername(username);
    	return todorepo.findByUsername(username);
    }

    @GetMapping(path = "/users/{username}/todos/{id}")
    public Todo findTodos(@PathVariable String username,@PathVariable int id){
        //return todoservice.findById(id);
    	return todorepo.findById(id).get();
    }

    @DeleteMapping(path = "/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodos(@PathVariable String username, @PathVariable int id){
        //todoservice.deleteById(id);
    	todorepo.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(path = "/users/{username}/todos/{id}")
    public Todo updateTodos(@PathVariable String username, @PathVariable int id,@RequestBody Todo todo){
        //todoservice.updateTodo(todo);
    	todorepo.save(todo);
        return todo;
    }

    @PostMapping(path = "/users/{username}/todos")
    public Todo createTodos(@PathVariable String username,@RequestBody Todo todo){
    	todo.setUsername(username);
    	todo.setId(null);
        //Todo newTodo =todoservice.addTodo(username,todo.getDescription(),todo.getTargetDate(),todo.isDone());
        //return newTodo;
    	return todorepo.save(todo);
       
    }
}
