//Todo : 할 일 정보가 들어있는 todos 배열을 -> map을 사용해 여러개의 TodoItem 컴포넌트를 렌더링한다. -> 여러 개의 할일 목록을 보여준다.

import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
    flex : 1;
    padding : 20px 32px;
    padding-bottom: 48px;
    overflow-y : auto;
`;

//flex를 1로 설정하면 - 자신이 차지할 수 있는 영역을 꽉 채운다.

const TodoList = () => {
    const todos = useTodoState();

    return (
        <TodoListBlock>
            {todos.map(todo => (
                <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                done={todo.done}
                />
            ))}
        </TodoListBlock>
    );
};

export default TodoList;

