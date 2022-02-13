import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/action';

function TodoInput() {
    let [input, setInput] = useState();
    let dispatch = useDispatch();
    const date = new Date();
    const currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}-${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return (
        <div>
            <div className="d-flex my-2">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text" className="col form-control" />
                <button
                    onClick={() => {
                        dispatch(addTodo({
                            id: new Date().getTime().toString(),
                            name: input,
                            time: currentTime
                        }));
                        setInput('');
                    }}
                    className="btn btn-primary mx-2">Add</button>
            </div>
        </div>
    )
}

export default TodoInput;
