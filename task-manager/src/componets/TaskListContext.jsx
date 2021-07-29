import React, {createContext,useState,useEffect} from 'react';
import uuid from 'uuid';
export const MyListContext = createContext(); //Objeto usado para compartir informacion

export default function TaskListContext(props) {

  /* LOCAL STORAGE*/
  const initialState = JSON.parse(localStorage.getItem('tasks'))||[];

  const [tasks, setTasks] = useState(initialState);
    
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks]);

  /****/

  const [editItem, setEditItem] = useState(null);

  const addTask = (title) =>{
    setTasks([
      ...tasks,
      {title,id:uuid()} //agrego las anteriores tareas y la actual que creo
    ])
  };

  const deleteTask = (id) =>{
    setTasks(tasks.filter(task => task.id !== id))
  };

  const clearTasks = () =>{
    setTasks([]);
  };

  const findItem = (id) =>{
    const item = tasks.find(task=>task.id === id);
    setEditItem(item);
  };

  const editTask = (title,id) =>{
    const newTasks = tasks.map(task =>(task.id === id ? {title,id} : task));
    setTasks(newTasks);
    setEditItem(null);
  };

  return (
    <MyListContext.Provider value={{tasks,addTask,deleteTask,clearTasks,findItem,editItem,editTask}}>
        {props.children}
    </MyListContext.Provider>
  )
}
