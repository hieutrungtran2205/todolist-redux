import React from 'react';
import { useSelector } from 'react-redux';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

function TodoList() {
    let todoList = useSelector(state => state);
    return (
        <>
            <TodoInput />
            <div className="my-4">
                {todoList.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} />;
                })}
            </div>
        </>
    )
}

export default TodoList
