import React from 'react';
import TodoTemplate from '../components/TodoTemplate';
import TodoHead from '../components/TodoHead';
import TodoList from '../components/TodoList';
import TodoCreate from '../components/TodoCreate';
import { TodoProvider } from '../TodoContext';

function Todo() {

    return(
        <TodoProvider>
        <h1 aria-label="TodayDoList"></h1>
            <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
            </TodoTemplate>
        </TodoProvider>
    )
}

export default Todo;