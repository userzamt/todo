import React from "react";
import TodoItem from "./TodoItem/TodoItem";


function TodoList(props) {

    let todoList= props.data.map(
        (item, key) => <TodoItem key={key} name={item.name} datetime={item.datetime} text={item.text} status={item.status}/>
    );

    return (
        <ul className="list-group">
            {todoList}
        </ul>
    );
}

export default TodoList;
