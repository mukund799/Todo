
import { useEffect , useState } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './component/TodoForm'
import Item from './component/Item'
import React from 'react';
import { Link , NavLink } from 'react-router-dom'
function App() {
  const [todos, setTodos] = useState([]);

  // initilising updateTodo function
  function updateTodo(id,msg){
    console.log(" updated todo function called ", id, " msg is ",msg);
    setTodos(
      todos.map(
      (item) => item.id === id ? { ...item, text : msg }: item
      )
    )
  }

  // defining the remove todo function

  function removeTodo(id){
    setTodos( 
      (prev) => prev.filter(
        (item) => item.id !== id
      )
    )
  }

  // defining the save todo function 

  function saveTodo(msg){
    setTodos([...todos, {id:Date.now() , text: msg, completed: false}]);
  }

  function toggleComplete(id){
    setTodos((prev) => 
        prev.map((prevTodo) => 
        prevTodo.id === id ? { ...prevTodo, 
            completed: !prevTodo.completed } : prevTodo))
  }
  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("val"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(
    ()=>{ localStorage.setItem("val",JSON.stringify(todos)) },[todos]
  )
  
  return (
    < TodoProvider value={{todos, setTodos, saveTodo, updateTodo, removeTodo,toggleComplete}} >
      < Link to={"info"}>Information</Link>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                {/* Todo form goes here */}
                <TodoForm/> 
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                {
                  
                  todos.map(
                    (item) =>  <Item key={Math.random()} todo={item} /> 
                  )
                }
            </div>
        </div>
      </div>
  </TodoProvider>
  )
}

export default App
