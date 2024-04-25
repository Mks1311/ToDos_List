import { createContext, useContext } from "react";

export const ToDoContext=createContext({
    ToDos:[{}],
    addToDo: (ToDo)=>{},
    deleteToDo: (id)=>{},
    updateToDo:(id,ToDo)=>{},
    toggleToDo:(id)=>{}
})

export const useToDoContext=()=>{
    return useContext(ToDoContext)
}

export const ToDoContextProvider=ToDoContext.Provider