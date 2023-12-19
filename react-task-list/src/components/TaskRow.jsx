import React, { useState } from 'react';
import '../css/TaskRow.css';

export default function TaskRow({ task, updateTask, deleteTask, completeTask }) {
  const [editedText, setEditedText] = useState(task.titulo);
  const [isEditing, setIsEditing] = useState(false);
  const taskClassName = task.complete ? 'completed-task' : 'incomplete-task';

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    updateTask({ ...task, titulo: editedText });
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedText(task.titulo);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };


  return (
    <tr>
      <td>
        <div className={`task ${taskClassName}`} key={task.titulo}>
          <input
            className=''
            type="checkbox"
            checked={task.complete}
            onChange={() => completeTask(task)}
          />
          {isEditing ? (
            <>
              <input
                className='edit-input'
                type="text"
                value={editedText}
                onChange={handleInputChange}
              />
              <button className='button-save' onClick={handleSaveClick}>
              <img src="./src/img/aceptar.png" alt="guardar" className='save' />
              </button>
              <button className='button-delete' onClick={handleCancelClick}>
              <img src="./src/img/cancelar.png" alt="cancelar" className='edit' />
              </button>
            </>
          ) : (
            <>
              <p className='task-title'>{editedText}</p>
              <button className='button-edit' onClick={handleEditClick}>
                <img src="./src/img/edit.png" alt="editar" className='edit' />
              </button>
              <button className='button-delete' onClick={() => deleteTask(task)}>
                <img src="./src/img/delete.png" alt="borrar" className='icon' />
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
}

