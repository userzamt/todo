import React from "react";
import TodoItem from "./TodoItem/TodoItem";


class TodoList extends React.Component{
    // чтобы иметь доступ к передаваемым свойсвам укзываем props
    constructor(props) {
        super(props);

        let data = props.data; /* промежуточное звено перед занесением в состояние компонента */

        this.state = {
            data,
        };
    }

    render() {
        let todoList = this.state.data.map(
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
}

export default TodoList;
