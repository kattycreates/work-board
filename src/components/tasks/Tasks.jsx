import React from 'react'
import './tasks.css'
import Task from '../task/Task'
const Tasks = ({tasks,allTasks,setTasks,name,setEdit,setTitle,setDesc,setId}) => {
  return (
    <div className='tasks'>
        {tasks.map(task=><Task key={task.id} task={task} tasks={allTasks} setTasks={setTasks} name={name} setEdit={setEdit} setTitle={setTitle} setDesc={setDesc} setId={setId}/>)}
    </div>
  )
}

export default Tasks