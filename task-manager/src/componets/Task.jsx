import React, {useContext} from 'react';
import { MyListContext } from './TaskListContext';

export default function Task({task}) {

  const {deleteTask} = useContext(MyListContext);

  return (
    <li className="list-item">
      <span>{task.title}</span>
      <div>
        <button onClick={()=>deleteTask(task.id)} className="btn-delete task-btn">
          <i className="fas fa-trash-alt"></i>
        </button>

        <button className="btn-edit task-btn">
          <i className="fas fa-pen"></i>
        </button>

      </div>

    </li>
  )
}
