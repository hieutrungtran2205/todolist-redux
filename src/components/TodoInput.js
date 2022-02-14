import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions';
import moment from 'moment';

function TodoInput() {
    console.log("render TodoInput");

    const [input, setInput] = useState();
    const dispatch = useDispatch();
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
                            time: moment().format('hh:mm:ss - DD/MM/YYYY')
                        }));
                        setInput('');
                    }}
                    className="btn btn-primary mx-2">Add</button>
            </div>
        </div>
    )
}

export default TodoInput;
