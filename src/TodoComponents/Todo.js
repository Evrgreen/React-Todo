import React from "react";



export default function Todo({toDo,completeToDo}){
    return(
        <div onClick={()=>completeToDo(toDo.id)} className={`toDo ${toDo.completed? 'completed': ''}`}>
            <h1>{toDo.task}</h1>
        </div>
    )
}