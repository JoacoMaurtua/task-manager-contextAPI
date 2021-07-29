import React, {useContext, useState} from 'react';
import { MyListContext } from './TaskListContext';

export default function TaskForm() {

  const {addTask} = useContext(MyListContext);

  const [title,setTitle] = useState('');

  const HandleSubmit = (event) =>{
    event.preventDefault();
    addTask(title);
  }

  const HandleChange = (event) =>{
    const {value} = event.target
    setTitle(value);
  }

  return (
    <form onSubmit={HandleSubmit} className="form">
      <input 
       type="text"
       className="task-input"
       placeholder="Add Task..."
       required
       value={title}
       onChange={HandleChange} 
       />

       <div className="buttons">
         <button type="submit" className="btn add-task-btn">Add task</button>

         <button className="btn clear-task-btn">Clear task</button>
       </div>
    
    </form>
  )
}
