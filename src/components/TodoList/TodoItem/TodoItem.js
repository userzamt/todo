import React from "react";


function TodoItem(props) {

    let listGroupStyle;
    let tickNow = (new Date()).getTime();
    let previousDay = Math.ceil((tickNow - props.datetime) / (1000*3600*24));


    switch (props.status) {
        case "error":
            listGroupStyle = "list-group-item-danger";
            break;

        case "success":
            listGroupStyle = "list-group-item-success";
            break;

        default:
            listGroupStyle = previousDay >= 30 ? "list-group-item-warning" : "";
    }

    return (
        <li className={`list-group-item list-group-item-action ${listGroupStyle}`}>
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
