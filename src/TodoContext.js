//Todo : 구현할 Context API는 리듀서로, App을 대신해 {TodoHead, TodoList, TodoCreate, TodoItem}에게 필요한 props을 전달해주는 역할을 한다.

//* useReducer를 사용해 상태를 관리하는 TodoProvider 컴포넌트를 만든다.

import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
    {
        id : 1,
        text : '일어나고',
        done : true
    },
    {
        id : 2,
        text : '밥먹고',
        done : true
    },
    {
        id : 3,
        text : '공부하고',
        done : true
    },
    {
        id : 4,
        text : '집가고',
        done : false
    }
];

function todoReducer(state, action) {
    switch(action.type) {
        case 'CREATE' :
            return state.concat(action.todo);
        case 'TOGGLE' :
            return state.map(todo =>
                todo.id === action.id ?
                {...todo, done : !todo.done} : todo
                );
        case 'REMOVE' :
            return state.filter(todo => todo.id !== action.id);
            default :
                throw new Error(`Unhandled action type : ${action.type}`);
    }
}

/*
* state와 dispatch를 Context를 통해 -> 다른 컴포넌트에서 바로 사용할 수 있게 한다.
* 두 개의 Context를 만들어 -> state와 dispatch를 따로따로 넣어준다.
* -> 이렇게 하면 dispatch만 필요한 컴포넌트에서 불필요한 렌더링을 방지할 수 있다.
*/

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();


export function TodoProvider({children}) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoState() {
    const context = useContext(TodoStateContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context;
};

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context;
};

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}


