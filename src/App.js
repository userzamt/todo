import React from "react";
import './App.css';

function App() {
  return (
    <div className="container">
        <ul className="list-group">
            <li className="list-group-item list-group-item-action list-group-item-danger" aria-current="true">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">ES6 import</h5>
                    <small>вчера</small>
                </div>
                <p className="mb-1">Необходимо выучить и разобрать отличия работы с модулями в JS и NodeJS.</p>
                <small>Статус: Срочно</small>
            </li>
            <li className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Завтрак</h5>
                    <small className="text-muted">2 дня назад</small>
                </div>
                <p className="mb-1">Приготовить любимой завтрак в постель.</p>
                <small className="text-muted">Статус: главное не забыть</small>
            </li>
            <li className="list-group-item list-group-item-action list-group-item-warning">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">React</h5>
                    <small className="text-muted">6 дней назад</small>
                </div>
                <p className="mb-1">Изучить основы React. Возможности ES2016.</p>
                <small className="text-muted">Срок: 7 дней на выполнение</small>
            </li>
            <li className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">ДемоЭкзамен</h5>
                    <small className="text-muted">месяц назад</small>
                </div>
                <p className="mb-1">Организация подготовки студентов к демонстрационному экзамену по стандартам WorldSkills</p>
                <small className="text-muted">Срок: 12 апреля</small>
            </li>
            <li className="list-group-item list-group-item-action list-group-item-success">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Проверка д/з</h5>
                    <small className="text-muted">неделю назад</small>
                </div>
                <p className="mb-1">Проверка домашнего задания 8-ой недели подготовки студентов к экзамену.</p>
                <small className="text-muted">Выполнено</small>
            </li>
            <li className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Разработка todo-приложения</h5>
                    <small className="text-muted">сегодня</small>
                </div>
                <p className="mb-1">Создать на основе примера из книге по React приложение для списка дел.</p>
                <small className="text-muted">Срок: неопределенно</small>
            </li>
        </ul>
    </div>
  );
}

export default App;
