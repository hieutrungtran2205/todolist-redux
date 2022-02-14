import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../store/actions';

function TodoDetail({ todo }) {
    console.log("render TodoDetail");

    const [editable, setEditable] = useState(false);
    const [name, setName] = useState(todo.name);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="d-flex align-items-center my-3">
                <div className="col" key={todo.id}>
                    {editable ?
                        <input type="text" className="form-control"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        :
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5 className='mx-4'>{todo.name}</h5>
                            <span>{todo.time}</span>
                        </div>
                    }

                </div>

                <button className="btn btn-primary m-2"
                    onClick={() => {
                        dispatch(updateTodo({
                            ...todo,
                            name: name,
                            time: moment().format('hh:mm:ss - DD/MM/YYYY')
                        }))
                        if (editable) {
                            setName(todo.name);
                        }
                        setEditable(!editable);


                    }}
                >{editable ? "Update" : "Edit"}</button>

                <button className="btn btn-danger m-2"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                >Delete</button>
            </div>
        </div>
    );
}

export default TodoDetail;