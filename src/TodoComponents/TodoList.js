// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo"

export default function TodoList({toDos,completeToDo}){



    
        return(
            <div className="todoList">
            {toDos.map(item=>(
                <Todo className="todoCard" toDo={item} key={item.id} completeToDo={completeToDo}/>
            ))}
            </div>
        )
    }
