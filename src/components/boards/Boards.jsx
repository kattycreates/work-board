import React,{useState} from 'react'
import './boards.css'
import Board from '../board/Board'


const Boards = ({showArchive,tasks,setTasks}) => {
  const [show,setShow]=useState(false);
  const [title,setTitle]=useState('');
  const [desc,setDesc]=useState('');
  const [edit,setEdit]=useState(false);
  const [id,setId]=useState(0);

  let todos=tasks.filter(task=>showArchive?task.newTask===true:task.newTask===true&&task.archived===false);
  let tasksInProgress=tasks.filter(task=>showArchive?task.inProgress===true:task.inProgress===true&&task.archived===false);
  let completedTasks=tasks.filter(task=>showArchive?task.completed===true:task.completed===true&&task.archived===false);
  console.log('tasks',tasks);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(title&&desc){
      if(edit){
        let modifiedTasks=tasks.map(task=>task.id!==id?task:{...task,title,desc});
        setTasks(modifiedTasks);
        setEdit(false);

      }
      else{
        let newTask={
          title,desc,archived:false,
          id:Math.random()*999,
          inProgress:false,
          completed:false,
          newTask:true
        };
        setTasks([...tasks,newTask])
      }
      
      
      setTitle('');
      setDesc('');
      
    }
    setShow(false);
   

  }
  
  //console.log('show',show);
  return (
    <div className='boards'>
    
        <Board name="to do" setShow={setShow} todos={todos} tasks={tasks} setTasks={setTasks} setEdit={setEdit} setTitle={setTitle} setDesc={setDesc} setId={setId}/>
        <Board name="in progress" tasksInProgress={tasksInProgress} tasks={tasks} setTasks={setTasks} setEdit={setEdit} setTitle={setTitle} setDesc={setDesc} setId={setId}/>
        <Board name="done" completedTasks={completedTasks} tasks={tasks} setTasks={setTasks} setEdit={setEdit} setTitle={setTitle} setDesc={setDesc} setId={setId}/>
        
        {show&&<form className='task-input' onSubmit={handleSubmit}>
          <input type='text' className='input' placeholder='Enter title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <textarea placeholder='Type here' className='textarea' value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
          <button type='submit' className='btn' >Add task</button>
          <button className='close' onClick={()=>setShow(false)}>Close</button>
        </form>}
        {edit&&<form className='task-input' onSubmit={handleSubmit}>
          <input type='text' className='input' placeholder='Enter title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <textarea placeholder='Type here' className='textarea' value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
          <button type='submit' className='btn' >Update</button>
          <button className='close' onClick={()=>setEdit(false)}>Close</button>
        </form>}
       
        
    </div>
  )
}

export default Boards