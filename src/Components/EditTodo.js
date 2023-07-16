import { useState } from "react";


function EditTodo({todo, editTodo, cancelEditTodo}){

    const [value,setValue] =useState(todo.content);
    

    function handleChange(e) {
        const inputValue = e.target.value;
        setValue(inputValue);
      }
    
      function handleKeyDown(e) {
        if (e.key === 'Enter' && value.length) {
          editTodo(value);
          setValue('');
        }
      }
    
      function handleClick() {
        if (value.length) {
          editTodo(value);
          setValue('');
        }
      }

      return(
        <div className="flex flex-row justify-center items-center mb-4">
            <input
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={value}
            className="mr-4 shadow appearance-none border rounded p-1 flex-auto"/>

            <button onClick={handleClick}  className="flex-no-shrink p-2 border-2 rounded text-green-400 border-green-400 hover:text-white hover:bg-green-500 mr-4">Sauvergarder</button>
            <button onClick={cancelEditTodo} className="flex-no-shrink p-2 border-2 rounded text-red-400 border-red-400 hover:text-white hover:bg-red-500">Annuler</button>

        </div>
    )
}

export default EditTodo;