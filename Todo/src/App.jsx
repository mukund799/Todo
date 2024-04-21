
import { useState } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './component/TodoForm'
import Item from './component/Item'
function App() {
  const [todos, setTodos] = useState([]);

  // initilising updateTodo function
  function updateTodo(id,msg){
    console.log(" updated todo function called ", id, " msg is ",msg);
  }

  // defining the remove todo function

  function removeTodo(id){
    console.log(" remove todo function called with id ", id);
    let newList= todos.filter((todo)=> todo.id !== id)
    console.log(" todo list after deletion ", newList);
    setTodos([...newList])
  }

  // defining the save todo function 

  function saveTodo(msg){
    console.log(" save todo called with msg: ", msg);
    setTodos([...todos, {id:Date.now() , text: msg, completed: false}]);
    console.log(" todos is: ", todos);
  }

  return (
    < TodoProvider value={{todos, setTodos, saveTodo, updateTodo, removeTodo}} >
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
                    (item) =>  <Item key={Date.now()} todo={item} /> 
                  )
                }
            </div>
        </div>
      </div>
  </TodoProvider>
  )
}

export default App
