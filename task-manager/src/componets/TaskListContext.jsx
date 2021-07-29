import React, {createContext,useState} from 'react';
import uuid from 'uuid';
export const MyListContext = createContext(); //Objeto usado para compartir informacion

export default function TaskListContext(props) {

  const [tasks, setTasks] = useState([
    {title:'Wash the car',id:1},
    {title:'Write some code',id:2},
    {title:'Read a book',id:3}
  ]);

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
  };

  return (
    <MyListContext.Provider value={{tasks,addTask,deleteTask,clearTasks,findItem,editItem,editTask}}>
        {props.children}
    </MyListContext.Provider>
  )
}
