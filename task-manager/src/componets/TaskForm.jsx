import React from 'react'

export default function TaskForm() {
  return (
    <form className="form">
      <input 
       type="text"
       className="task-input"
       placeholder="Add Task..."
       required 
       />

       <div className="buttons">
         <button type="submit" className="btn add-task-btn">Add task</button>

         <button className="btn clear-task-btn">Clear task</button>
       </div>
    
    </form>
  )
}
