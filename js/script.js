'use strict';


class Todo { 
    constructor(form, input, todoList, todoCompleted){
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.todoList = document.querySelector(todoList);
        this.todoCompleted = document.querySelector(todoCompleted);
        this.todoData = new Map(JSON.parse(localStorage.getItem('toDolist')));
    }

    addToStorage(){
        localStorage.setItem('toDolist',JSON.stringify([...this.todoData]));
    }
    render(){
        this.todoList.textContent = '';
        this.todoCompleted.textContent = '';
        this.todoData.forEach(this.createItem, this);
        this.addToStorage();
    }

    createItem(todo){
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.insertAdjacentHTML('beforeend', `
        <span class="text-todo">${todo.value}</span>
				<div class="todo-buttons">
					<button class="todo-remove"></button>
					<button class="todo-complete"></button>
				</div>
        `);

        if(todo.completed) {
            this.todoCompleted.append(li);
        } else {
            this.todoList.append(li);
        }
    }

    addTodo (e) {
        e.preventDefault();
       if(this.input.value.trim()) {
        const newTodo = { 
            value: this.input.value,
            completed: false,
            key:this.generateKey(),
        };
        this.todoData.set(newTodo.key, newTodo);
        this.render();
      }
    }
generateKey(){
    return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2, 15);
}

deleteItem(){

}

completedItem(){

}
handlerList(){
    this.todoList.addEventListener('click', (e) => {

if(e.target.closest('.todo-remove')){
 let wowa =e.target.closest('.todo-remove');
 delete wowa;
}
    }); 
}


 init(){
    this.form.addEventListener('submit', this.addTodo.bind(this));
    this.render();
 }   
}
const todo = new Todo('.todo-control', '.header-input', '.todo-list' , '.todo-completed');
todo.handlerList();
todo.init();