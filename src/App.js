import { useState } from "react";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";


function App() {

  const [todoList, setTodoList] = useState([]);

  function addTodo(content){
    const todo = {
      id: crypto.randomUUID(),
      done:false,
      edit:false,
      content
    };
    setTodoList([...todoList, todo]);
  }

  function deleteTodo(id){
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  function toggleTodo(id){
    setTodoList(
      todoList.map((todo) =>
      todo.id === id ? {...todo, done: !todo.done} : todo)
    );
  }

  function togggleTodoEdit(id){
    setTodoList(
      todoList.map((todo) =>
      todo.id === id ? { ...todo, edit: !todo.edit}: todo)
    );
  }

  function editTodo(id, content){
    setTodoList(
      todoList.map((todo)=> 
      todo.id === id ? {...todo, edit: false, content} : todo)
    )
  }

  return (
    <div className="flex justify-center items-center p-4">
    <div className="container mx-auto w-1/2">
      <h1 className="font-bold text-3xl text-grey-darkest mb-4">Todo List</h1>
      <AddTodo addTodo={addTodo}/>
      <TodoList 
        todoList={todoList} 
        deleteTodo = {deleteTodo}
        toggleTodo = {toggleTodo}
        togggleTodoEdit ={togggleTodoEdit}
        editTodo = {editTodo}
      />
    </div>
  </div>
  );
}

export default App;


