import React, { useState } from 'react';
import '../css/TaskRow.css';

//profe es en esta parte del codigo donde empece a implementar el recuadro de editar y eso, pero no se me guarda la tarea actualizada cunado le doy a save

export default function TaskRow({ task, updateTask, deleteTask}) {
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
        <label className={`task ${taskClassName}`} key={task.titulo}>
          <input
            className=''
            type="checkbox"
            checked={task.complete}
            onChange={() => updateTask(task)}
          />
          {isEditing ? (
            <>
              <input
                className='edit-input'
                type="text"
                value={editedText}
                onChange={handleInputChange}
              />
              <button className='save' onClick={handleSaveClick}>
                Save
              </button>
              <button className='cancel' onClick={handleCancelClick}>
                Cancel
              </button>
            </>
          ) : (
            // y otra cosa, cuando pongo una imagen en los botones, se rompe la logica y el boton solo me cambia el estado de la tarea pero no me deja actualizarla
            <>
              <p className='task-title'>{task.titulo}</p>
              <button className='button-edit' onClick={handleEditClick}>
                  editar
                <img src="./src/img/edit.png" alt="editar" className='edit' />
              </button>
              <button className='button-delete' onClick={() => deleteTask(task)}>
                <img src="./src/img/delete.png" alt="borrar" className='icon' />
              </button>
            </>
          )}
        </label>
      </td>
    </tr>
  );
}
