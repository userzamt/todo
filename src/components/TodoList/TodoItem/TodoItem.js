import React from "react";
import "./TodoItem.css";


class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        let {title, datetime, description, note, status} = props;
        this.state = {title, datetime, description, note, status};
    }

    render() {
        let listGroupStyle;
        // число тиков с начало эпохи минус время из свойства компонента
        let tickNow = (new Date()).getTime();
        let previousDay = Math.ceil((tickNow - this.state.datetime) / (1000*3600*24)); // количество дней
        // дата выдачи
        let dateOfIssue = new Date(this.state.datetime);
        let options = {day: "2-digit", month:"2-digit", year: "numeric" };

        switch (this.state.status) {
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
                    <h5 className="mb-1">{this.state.title}</h5>
                    <small className="text-muted">{dateOfIssue.toLocaleDateString("ru", options)}</small>
                </div>
                <div className="d-flex w-100 justify-content-between">
                    <div>
                        <p className="mb-1 me-4 text-justify">{this.state.description}</p>
                        <small className="text-muted">{this.state.note}</small>
                    </div>
                    <div className="form-check form-switch align-self-lg-center">
                        <input className="form-check-input" type="checkbox"  checked={this.state.status === "success" } />
                    </div>
                </div>

            </li>
        );
    }
}

export default TodoItem;
