import React from 'react';
import { useSelector } from 'react-redux';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

function TodoList() {
    console.log("render TodoList");

    let todoList = useSelector(state => state);
    return (
        <div>
            <h3 className='my-3'>TodoList Redux</h3>
            <TodoInput />
            <div className="my-4">
                {todoList.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} />;
                })}
            </div>
        </div>
    )
}

export default TodoList
