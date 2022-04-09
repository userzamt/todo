import React from "react";


function TodoItem() {

    return (
        <li className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Разработка todo-приложения</h5>
                <small className="text-muted">сегодня</small>
            </div>
            <p className="mb-1">Создать на основе примера из книге по React приложение для списка дел.</p>
            <small className="text-muted">Срок: неопределенно</small>
        </li>
    );
}

export default TodoItem;
