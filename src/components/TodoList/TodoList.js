import React from "react";
import TodoItem from "./TodoItem/TodoItem";


function TodoList() {

    return (
        <ul className="list-group">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </ul>
    );
}

export default TodoList;
