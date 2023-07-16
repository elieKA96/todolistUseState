import { useState } from "react";

function AddTodo({addTodo}){

    const [value, setValue] = useState("");

    function handleChange(e){
        const inputValue = e.target.value;
        setValue(inputValue);
    }

    function handleKeyDown(e){
        if(e.code ==="Enter" && value.length){
            addTodo(value);
            setValue("");
        }
    }

    function handleClick(){
        if(value.length){
            addTodo(value);
            setValue("");
        }
    }

    return(
        <div className="flex flex-row justify-center items-center mb-4">
        <input
        type="text"
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        placeholder="Ajouter une todo"
        className="shadow appearance-none border rounded flex-auto py-2 px-3 mr-4 text-grey-darker"
        />
        <button 
        onClick={handleClick}
        className="flex-no-shrink p-2 border-2 rounded text-lime-400 border-lime-400 hover:text-white hover:bg-lime-500">Ajouter</button>
    </div>
    )
   
}

export default AddTodo;