import EditTodo from "./EditTodo";
import TodoItem from "./TodoItem";


export default function TodoList(
    {
        todoList,
        deleteTodo,
        toggleTodo,
        togggleTodoEdit,
        editTodo
    }
)
{
    return todoList.length ? (
        <ul>
            { todoList.map((todo)=> 
                todo.edit ? (
                    <EditTodo key={todo.id} 
                    todo={todo}
                    editTodo = {(content) => editTodo(todo.id, content)}
                    cancelEditTodo ={()=> togggleTodoEdit(todo.id)}
                    />
                )
                :(
                <TodoItem 
                key={todo.id}
                todo={todo}
                deleteTodo = {() => deleteTodo(todo.id)}
                toggleTodo = {() => toggleTodo(todo.id)} 
                editTodo = {() => togggleTodoEdit(todo.id)}
                />
            )) }
        </ul>
    ) : (<p> Aucune tache pour le moment</p>)
}

/**
 *  <ul>
            {todoList.map((todo) => <TodoItem todo = {todo}/> )}
        </ul>
 */