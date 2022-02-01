import React from 'react';
import Todo from './Todo';
import { useState, useEffect } from 'react'




const TodoList = () => {
    const [opencount, countOpenTodos] = useState(0);

    const [todos, setTodos] = useState(() => {
        const items = localStorage.getItem("items")
        const parsed = JSON.parse(items);
        return parsed || [];
    });

    const [textInput, setTextInput] = useState("");

    const changeText = (e) => {
        setTextInput(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        const newTodos = [...todos, { description: textInput, done: false }];
        setTodos(newTodos);
        setTextInput("");
    }

    const countOpen = () => {
        const donetodos = todos.filter((item) => {
            return !item.done;
        });
        countOpenTodos(donetodos.length)
    };

    const changeTodo = (index) => {
        const newTodos = [...todos];
        if (newTodos[index].done) {
            newTodos[index].done = false;
        } else {
            newTodos[index].done = true;
        }
        setTodos(newTodos);
    }

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    useEffect(() => {
        countOpen();
        localStorage.setItem("items", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="listStyle">
            <div>
                <h1 className="überschrift">Usere ToDos</h1>
                <h2>Offene Todos: {opencount}</h2>
                <form action="">
                    <input onChange={changeText} value={textInput} type="text" name="" id="" placeholder="Neues Todo..." />
                    <input onClick={submit} type="button" value="Add Todo" />
                </form>
            </div>

            {todos.map((item, index) => {
                return (
                    <Todo
                        description={item.description}
                        done={item.done}
                        key={index}
                        index={index}
                        onChangeTodo={changeTodo}
                        onDeleteTodo={deleteTodo}
                    ></Todo>
                )
            })}

        </div>
    );

};

export default TodoList;
