import React from "react";


function TodoItem(props) {

    console.log(props);

    return (
        <li className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{props.data.name}</h5>
                <small className="text-muted">{props.data.datetime}</small>
            </div>
            <p className="mb-1">{props.data.text}</p>
            <small className="text-muted">{props.data.status}</small>
        </li>
    );
}

export default TodoItem;
