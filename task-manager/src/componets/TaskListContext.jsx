import React, {createContext,useState} from 'react';

export const MyListContext = createContext(); //Objeto usado para compartir informacion

export default function TaskListContext(props) {

  const [tasks, setTasks] = useState([
    {title:'Wash the car',id:1},
    {title:'Write some code',id:2},
    {title:'Read a book',id:3}
  ]);

  return (
    <MyListContext.Provider value={{tasks,setTasks}}>
        {props.children}
    </MyListContext.Provider>
  )
}
