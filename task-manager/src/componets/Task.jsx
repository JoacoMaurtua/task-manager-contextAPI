import React from 'react';

export default function Task() {
  return (
    <li className="list-item">
      <span>Task title</span>
      <div>
        <button className="btn-delete task-btn">
          <i className="fas fa-trash-alt"></i>
        </button>

        <button className="btn-edit task-btn">
          <i className="fas fa-pen"></i>
        </button>

      </div>

    </li>
  )
}
