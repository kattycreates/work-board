import React, { useRef } from 'react'
import './task.css'
import ContextMenu from '../contextMenu/ContextMenu'
const Task = ({task,tasks,setTasks,name}) => {
    const taskRef=useRef(null);
  return (
    <div className='task' ref={taskRef} style={name==='in progress'?{backgroundColor:"rgb(255, 255, 116)"}:name==='done'?{backgroundColor:'rgb(147, 255, 133)'}:null}>
        <h3>{task.title}</h3>
        <p>{task.desc}</p>
        <ContextMenu boardId={task.newTask?'To do':task.inProgress?'In progress':'Done'} parent={taskRef} taskId={task.id} tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default Task
