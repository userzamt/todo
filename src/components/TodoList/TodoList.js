import React from "react";
import TodoItem from "./TodoItem/TodoItem";


function TodoList() {
    let todoList =
        [
            {
                name: "ES6 import",
                datetime: "вчера",
                text: "Необходимо выучить и разобрать отличия работы с модулями в JS и NodeJS.",
                status: "Статус: Срочно",
            },
            {
                name: "Завтрак",
                datetime: "2 дня назад",
                text: "Приготовить любимой завтрак в постель.",
                status: "Статус: главное не забыть",
            },
            {
                name: "React",
                datetime: "6 дней назад",
                text: "Изучить основы React. Возможности ES2016.",
                status: "Срок: 7 дней на выполнение",
            },
            {
                name: "ДемоЭкзамен",
                datetime: "месяц назад",
                text: "Организация подготовки студентов к демонстрационному экзамену по стандартам WorldSkills",
                status: "Срок: 12 апреля",
            },
            {
                name: "Проверка д/з",
                datetime: "неделю назад",
                text: "Проверка домашнего задания 8-ой недели подготовки студентов к экзамену.",
                status: "Выполнено",
            },
            {
                name: "Разработка todo-приложения",
                datetime: "сегодня",
                text: "Создать на основе примера из книге по React приложение для списка дел.",
                status: "Срок: неопределенно",
            },
        ];

    // console.log(todoList);

    return (
        <ul className="list-group">
            <TodoItem data={todoList[0]} />
            <TodoItem data={todoList[1]} />
            <TodoItem data={todoList[2]} />
            <TodoItem data={todoList[3]}/>
        </ul>
    );
}

export default TodoList;
