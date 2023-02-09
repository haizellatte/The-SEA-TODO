//Todo : 새로운 할일을 등록하는 컴포넌트
/*
* 1. useState를 사용해 -> 토글할 수 있는 open 값을 관리하고,
* 2. 이 값이 true라면 -> 아이콘을 45도 돌려 x모양이 보여지고, 버튼 색상을 빨간색으로 바꿔준다.
* 3. 그리고 할 일을 입력할 수 있는 form도 보여준다.
*/

import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const CircleButton = styled.button`
    background: #0da6c8e0;
    &:hover {
        background: #18c2d9e0;
    }
    &:active {
        background: #18c2d9e0;
    }
    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.125s all ease-in;
        ${props =>
        props.open && css`
            background: #ff6b6b;
            &:hover {
            background: #ff8787;
            }
            &:active {
            background: #fa5252;
            }
            transform: translate(-50%, 50%) rotate(45deg);
            `}
`;

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom : 0;
    left: 0;
    position : absolute;
`;

const InsertForm = styled.form`
    background: #f8f9fa;
    padding-left: 32px;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 72px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

const TodoCreate = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () => setOpen(!open);
    const onChange = e => setValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault(); // 새로고침 방지
        dispatch({
            type : "CREATE",
            todo : {
                id : nextId.current,
                text : value,
                done : false
            }
        });
        setValue('');
        setOpen(false);
        nextId.current += 1;
    }

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <Input 
                        autoFocus 
                        placeholder='Write a todo'
                        onChange={onChange}
                        value={value}
                        />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open} >
            <MdAdd />
            </CircleButton>
        </>
    );
};

export default React.memo(TodoCreate);

/*
?<input> 태그의 autofocus 속성을 부여하면 -> 페이지가 로드될 때 자동으로 포커스가 <input> 요소로 이동한다.
* autofocus 속성은 불리언(boolean)속성으로 -> 명시 하지 않으면 자동으로 false값을 가지며, 명시하면 true 값을 가진다.
http://www.tcpschool.com/html-tag-attrs/input-autofocus
*/