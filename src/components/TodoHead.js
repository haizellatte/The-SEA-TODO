//Todo : 오늘의 날짜와 요일, 앞으로 남은 할일 정보를 보여준다.

import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
    padding-top : 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;

    h1 {
        margin: 0;
        top: 50%;
    }
    .day {
        margin: 0;
        margin-top: 4px;
        color: #343a40;
        font-size: 32px;
        font-family: 'Rubik', sans-serif;
        position: relative;
        left : 65%;
    }
    .tasks-left {
        color: #ffffffda;
        font-size: 26px;
        letter-spacing: .02em;
        font-weight: bold;
        font-family: 'Titillium Web', sans-serif;
    }
`;

const today = new Date().toLocaleDateString()
let day = new Date();
const weekDay = ['SUN', 'MON','TUE', 'WED','THU','FRI', 'SAT'];
let Week = weekDay[day.getDay()];

const TodoHead = () => {
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);

    return (
        <TodoHeadBlock>
            <h1>
                <div className='day'>{today} {Week}</div>
                
            </h1>
            <div className='tasks-left'>{undoneTasks.length} Tasks</div>
        </TodoHeadBlock>
    );
};

export default TodoHead;