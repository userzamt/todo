import React from "react";
import TodoItem from "./TodoItem/TodoItem";


function TodoList(props) {

    let todoList= props.data.map(
        (item, key) => <TodoItem key={key}
                                 title={item.title}
                                 datetime={item.datetime}
                                 description={item.description}
                                 note={item.note}
                                 status={item.status}/>
    );

    return (
        <ul className="list-group">
            {todoList}
        </ul>
    );
}

export default TodoList;
