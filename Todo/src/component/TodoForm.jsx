import { useState } from "react";
import UseTodo from "../context/TodoContext";
import React from 'react';

function TodoForm() {
    
    // calling this UseTodo function whch is define in context file, which will
    // return the useContext reference.

    const useTodo = UseTodo();
    
    // creating the msg 
    const [msg , setMsg] = useState("");

    // saveMsg functon defnition

    const saveMsg = (e) => { e.preventDefault() ; useTodo.saveTodo(msg); setMsg("")}

    return (
        <form onSubmit={saveMsg}  className="flex">
            <input
                type="text"
                value={msg}
                onChange={ (e) => {setMsg(e.target.value)} }
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

