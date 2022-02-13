import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodo, updateTodo } from '../redux/action';

function TodoItem({ todo }) {

    const [name, setName] = useState(todo.name);
    const [editable, setEditable] = useState(false);
    const dispatch = useDispatch();
    const date = new Date();
    const timeUpdate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}-${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    return (
        <div>
            <div className="d-flex align-items-center my-3">
                <div className='stt'>#</div>
                <div className="col" key={todo.id}>
                    {editable ?
                        <input type="text" className="form-control"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        :
                        <Link to={todo.id} className='d-flex justify-content-between align-items-center'>
                            <h5 className='mx-4'>{todo.name}</h5>
                            <span>{todo.time}</span>
                        </Link>
                    }

                </div>

                <button className="btn btn-primary m-2"
                    onClick={() => {
                        dispatch(updateTodo({
                            ...todo,
                            name: name,
                            time: timeUpdate
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

    )

}

export default TodoItem
