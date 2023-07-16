
export default function TodoItem({
    todo,
    deleteTodo,
    toggleTodo,
    editTodo
}){

    
    return(
        <li className="flex flex-row justify-center items-center mb-4">
            <span className="flex-auto ">
            {todo.content} {todo.done ? '✅': ''}
            </span>
            <button onClick={toggleTodo}  className="flex-no-shrink p-2 border-2 rounded text-green-400 border-green-400 hover:text-white hover:bg-green-500 mr-4">Valider</button>
            <button onClick={editTodo}  className="flex-no-shrink p-2 border-2 rounded text-green-400 border-green-400 hover:text-white hover:bg-green-500 mr-4">Modifier</button>
            <button onClick={deleteTodo} className="flex-no-shrink p-2 border-2 rounded text-red-400 border-red-400 hover:text-white hover:bg-red-500">Supprimer</button>
            </li>
    );
}

