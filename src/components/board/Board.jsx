import React,{useRef} from 'react'
import './board.css'
import Tasks from '../tasks/Tasks'
import AddTask from '../addTask/AddTask'
const Board = ({name,setShow,todos,tasksInProgress,completedTasks,tasks,setTasks,setEdit,setTitle,setDesc,setId}) => {
const todoRef=useRef(null);
  return (
    name==='to do'?(
    <div className='board' ref={todoRef}>
        <h1 className='title'>{name.toUpperCase()}</h1>
        <Tasks tasks={todos} allTasks={tasks} setTasks={setTasks} name={name} setEdit={setEdit} setTitle={setTitle} setDesc={setDesc} setId={setId}/>
        <AddTask boardId='To do' parent={todoRef} setShow={setShow}/>

    </div>
  ):
  name==='in progress'?(
    <div className='board'>
        <h1 className='title'>{name.toUpperCase()}</h1>
        <Tasks tasks={tasksInProgress} allTasks={tasks} setTasks={setTasks}  name={name} setEdit={setEdit} setTitle={setTitle} setDesc={setDesc} setId={setId}/>
    </div>
  ):
  (
    <div className='board'>
        <h1 className='title'>{name.toUpperCase()}</h1>
        <Tasks tasks={completedTasks} allTasks={tasks} setTasks={setTasks}  name={name} setEdit={setEdit} setTitle={setTitle} setDesc={setDesc} setId={setId}/>
    </div>
  )
  )
}

export default Board
