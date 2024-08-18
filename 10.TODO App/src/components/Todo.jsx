import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import '../App.css'
import { FaCheck } from "react-icons/fa";
import { useState } from 'react';

function Todo({ todo, onDeleteTodo, onUpdateTodo }) {
    const { id, content } = todo
    const [editable, setEditable] = useState(false)
    const [newTodo, setNewTodo] = useState(content)

    const deleteTodo = () => {
        onDeleteTodo(id)
    }

    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request)
        setEditable(false)
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", border: "1px solid rgb(113, 129, 163)", padding: "10px", marginTop: "10px" }}>
            <div>
                {
                    editable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='todo-input' type="text" /> : content
                }
            </div>
            <div>
                <MdDeleteForever className='todo-icon' onClick={deleteTodo} />
                {
                    editable ? <FaCheck className='todo-icon' onClick={updateTodo} /> : <FaEdit className='todo-icon' onClick={() => setEditable(true)} />
                }
            </div>
        </div>
    )
}

export default Todo