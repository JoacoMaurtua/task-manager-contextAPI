import React from 'react';
import TaskList from './componets/TaskList';
import TaskListContext from './componets/TaskListContext';
import TaskForm from './componets/TaskForm';
import Header from './componets/Header';
import './App.css';

function App() {
  return (
    <TaskListContext>
      <div className="container">
        <div className="app-wrapper">
          <Header/>
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
