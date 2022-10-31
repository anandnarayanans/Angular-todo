import { Todo } from './Todo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 todos:Todo[]=[]
 newTodo:string


 saveTodo(){
  if(this.newTodo){
    let todo=new Todo()
    todo.name=this.newTodo;
    todo.isCompleted=true
    this.todos.push(todo)
    this.newTodo='';
  }
  else{
    alert("Please enter TODO")
  }
 }

 done(id:number){
  this.todos[id].isCompleted=!this.todos[id].isCompleted
 }


 remove(id:number){
  this.todos=this.todos.filter((args,id)=>id!==id)
 }

}
