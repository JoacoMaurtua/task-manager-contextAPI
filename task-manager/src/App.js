import React from 'react';
import TaskList from './componets/TaskList';
import TaskListContext from './componets/TaskListContext';
import './App.css';

function App() {
  return (
    <TaskListContext>
      <div className="App">
        <TaskList/>
      </div>
    </TaskListContext>
    
  );
}

export default App;
