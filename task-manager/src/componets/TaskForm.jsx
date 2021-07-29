import React, {useContext, useState, useEffect} from 'react';
import { MyListContext } from './TaskListContext';

export default function TaskForm() {

  const {addTask, clearTasks,editItem,editTask} = useContext(MyListContext);

  const [title,setTitle] = useState('');

  const HandleChange = (event) =>{
    const {value} = event.target
    setTitle(value);
  }

  const HandleSubmit = (event) =>{
    event.preventDefault();
    if(!editItem){
      addTask(title);
      setTitle('');
    }else{
      editTask(title,editItem.id);
    }
    
  }

  useEffect(()=>{
    if(editItem){
      setTitle(editItem.title);
      console.log(editItem)
    }else{
      setTitle("");
    }

  },[editItem]);

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
         <button type="submit" className="btn add-task-btn">{editItem?'Edit task':'Add task'}</button>

         <button onClick = {clearTasks} className="btn clear-task-btn">Clear</button>
       </div>
    
    </form>
  )
}
