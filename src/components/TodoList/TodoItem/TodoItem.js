import React from "react";


function TodoItem(props) {

    return (
        <li className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{props.title}</h5>
                <small className="text-muted">{props.datetime}</small>
            </div>
            <p className="mb-1">{props.description}</p>
            <small className="text-muted">{props.note}</small>
        </li>
    );
}

export default TodoItem;
