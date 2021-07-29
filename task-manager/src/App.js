import React from 'react';
import TaskList from './componets/TaskList';
import TaskListContext from './componets/TaskListContext';
import TaskForm from './componets/TaskForm';
import './App.css';

function App() {
  return (
    <TaskListContext>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <TaskForm/>
            <TaskList/>
          </div>
        </div>
      </div> 
    </TaskListContext>
  );
}

export default App;
