import React, {createContext,useState} from 'react';
import uuid from 'uuid';
export const MyListContext = createContext(); //Objeto usado para compartir informacion

export default function TaskListContext(props) {

  const [tasks, setTasks] = useState([
    {title:'Wash the car',id:1},
    {title:'Write some code',id:2},
    {title:'Read a book',id:3}
  ]);

  const addTask = (title) =>{
    setTasks([
      ...tasks,
      {title,id:uuid()} //agrego las anteriores tareas y la actual que creo
    ])
  }

  return (
    <MyListContext.Provider value={{tasks,addTask}}>
        {props.children}
    </MyListContext.Provider>
  )
}
