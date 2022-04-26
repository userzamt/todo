import React from "react";
import TodoList from "./components/TodoList/TodoList";
import todoData from "./todoData";


function App() {

  return (
    <div className="container">
        <TodoList data={todoData} />
    </div>
  );
}

export default App;
