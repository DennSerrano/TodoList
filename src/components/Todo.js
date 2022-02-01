import React from 'react';
//(Hook????)
import { useState } from 'react'

const Todo = ({ description, done, onChangeTodo, onDeleteTodo, index }) => {
    //von useState (Hook)
    // const [isdone, setDone] = useState(done)
    //diese wird in ein if statment gesetzt
    // const changeTodo = () => {
    //     if (isdone) {
    //         setDone(false)
    //     } else {
    //         setDone(true)
    //     }
    // }
    return (
        <div>
            <div className={
                done ? 'toDo'
                    : 'notTodo'
            }>
                <p onClick={() => {
                    onChangeTodo(index);
                }}>
                    {description}</p>
                <button onClick={() => {

                    onDeleteTodo(index);
                }}
                >Löschen</button>
            </div>
        </div>

    );
};

export default Todo;
