import React, {createContext,useState} from 'react';

export const MyListContext = createContext(); //Objeto usado para compartir informacion

export default function TaskListContext() {

  const [tasks, setTasks] = useState([
    {task:'Wash the car',id:1},
    {task:'Write some code',id:2},
    {task:'Read a book',id:3}
  ])

  return (
    <div>
      Task list context
    </div>
  )
}
