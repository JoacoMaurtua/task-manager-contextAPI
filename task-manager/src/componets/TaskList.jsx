import React, {useContext} from 'react';
import Task from './Task';
import { MyListContext } from './TaskListContext';

export default function TaskList() {

  const {tasks} = useContext(MyListContext); //accedo al contexto

  return (
    <ul className="list">
      {
        tasks.map((task,index)=>{
          return <Task key={index}/>
        })
      }
    </ul>
  )
}
