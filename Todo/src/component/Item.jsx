import { useEffect, useState } from "react";
import UseTodo from "../context/TodoContext";

export default function Item({ todo }) {
    console.log(" item functiom ", todo);
    // const tg = (id) =>{setTodos((prev) => 
    //     prev.map((prevTodo) => 
    //     prevTodo.id === id ? { ...prevTodo, 
    //         completed: !prevTodo.completed } : prevTodo))}

    // changing the bg color when wee checked mark

    const toggleCompleted = ( ) =>{
        const id = todo.id;
        setTodos((prev) => 
        prev.map((prevTodo) => 
        prevTodo.id === id ? { ...prevTodo, 
            completed: !prevTodo.completed } : prevTodo))
 }
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [ todoMsg , setTodoMsg] = useState(todo.text);

    const {removeTodo,updateTodo,todos,setTodos, toggleComplete } = UseTodo();
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#db5a37]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        // editTodo();
                        updateTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => removeTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}
