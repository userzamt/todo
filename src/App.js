import React, {Component} from "react";
import TodoList from "./components/TodoList/TodoList";
import todoData from "./todoData";


class App extends Component{
    constructor() {
        super();

        this.state = {
            todoData,
        };
    }

    render() {
        return (
            <div className="container">
                <TodoList data={this.state.todoData} />
            </div>
        );
    }
}

export default App;
