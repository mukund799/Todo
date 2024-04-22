import { useContext } from "react";
import { createContext } from "react";
import React from 'react';

// creating a context with no default value
export const TodoContext = createContext({
    todos: [{
        id: 1,
        text: 'Buy groceries',
        completed: false
    }],
    saveTodo: (msg) => {},
    addTodo: (id,todo) => {},
    removeTodo: id => {},
    updateTodo: (id, msg) => {}
});

// creating a provider of that context

export const TodoProvider = TodoContext.Provider;

// creating a function which will give me reference to use the created context

export default function UseTodo(){
    return useContext(TodoContext);
}