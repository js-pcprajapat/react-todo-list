import { createContext, useContext, useEffect, useReducer, useState } from "react";
export const TodosContext = createContext("");

const initialTodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];



export function TodosProvider({ children }) {
    const [todos, dispatch] = useReducer(todosReducer, initialTodos);
    const [modalIsActive, setModalIsActive] = useState(false);
    const [filterBy, setFilterBy] = useState('');

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    function filteredTodos(){
        switch(filterBy){
            case "todo":
                return todos.filter(todo => !todo.isDone);
            case "done":
                return todos.filter(todo => todo.isDone);
            default:
                return todos;
        }
    }

    return (
        <>
            <main>
                <TodosContext.Provider value={{ todos, dispatch, modalIsActive, setModalIsActive, filterBy, setFilterBy, filteredTodos }}>
                    {children}
                </TodosContext.Provider>
            </main>
        </>
    )
}
export function useTodos(){
    return useContext(TodosContext);
}
export function todosReducer(todos, action) {
    switch (action.type) {
        case 'added': {
            return [...todos, action.newTodo];
        }
        case 'deleted': {
            if (confirm("Are you sure want to delete this Todo?")) {
                return todos.filter(todo => todo.id !== action.id);
            }else{
                return todos;
            }
        }
        case 'toggledIsDone': {
            return (todos.map(todo => {
                if (todo.id === action.id) {
                    todo.isDone = !todo.isDone;
                    return todo;
                } else {
                    return todo;
                }
            }));
        }
    }
}