import React from "react";
import TodoItem from "./TodoItem/TodoItem";


function TodoList() {

    return (
        <ul className="list-group">
            <TodoItem
                name="Разработка todo-приложения"
                datetime="сегодня"
                text="Создать на основе примера из книге по React приложение для списка дел."
                status="Срок: неопределенно"
            />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </ul>
    );
}

export default TodoList;
