import React from 'react'
import './contextMenu.css'
import useContextMenu from '../../hooks/useContextMenu'
import { sendToDone,sendToProgress,sendToTasks} from '../utilities/utils'
const ContextMenu = ({boardId,parent,taskId,tasks,setTasks}) => {
    console.log('tasksnew',tasks)
    const {position,show}=useContextMenu(parent);
    const menuStyle={
        position:"absolute",
        top:position.y,
        left:position.x
    }
    const options=boardId==='To do'?[{panel:'In progress',func:sendToProgress},{panel:'Done',func:sendToDone}]
    :boardId==='In progress'?[{panel:'To do',func:sendToTasks},{panel:'Done',func:sendToDone}]
    :[{panel:'To do',func:sendToTasks},{panel:'In progress',func:sendToProgress}];

    //const options=boardId==='To do'?['In progress','Done']:boardId==='In progress'?['To do','Done']:['To do','In progress'];
    console.log('options',options);
    const handleClick=(obj,taskId,tasks)=>{
        let modifiedTasks=obj.func(tasks,taskId);
        setTasks(modifiedTasks);
    }

    const handleDelete = (taskId,tasks) => {
        if(window.confirm('Do you want to delete the task?')){
            let modifiedTasks= tasks.filter(t=>t.id!==taskId);
            setTasks(modifiedTasks)
            console.log('clicked',tasks);
        }
        
    }
    const handleArchive = (taskId,tasks) => {
        let modifiedTasks= tasks.map(t=>t.id===taskId?{...t,archived:true}:t);
        setTasks(modifiedTasks);
    }
    
  return (
    show?
    (<div style={menuStyle} className='contextMenu'>
        <ul>
            <li className='send'>
                <button className='menu-btn send-btn'>Send to</button>
                <div className='drop-down'>
                    {options.map((obj,i)=><button className='menu-btn sub-menu' onClick={(event)=>{event.preventDefault();handleClick(obj,taskId,tasks)}} key={i}>{obj.panel}</button>)}
                </div>
            </li>
            <li><button className='menu-btn' onClick={(event)=>{event.preventDefault();handleDelete(taskId,tasks)}}>Delete</button></li>
            <li><button className='menu-btn' onClick={(event)=>{event.preventDefault();handleArchive(taskId,tasks)}}>Archive</button></li>
        </ul>
        
    </div>):(<></>)
  )
}

export default ContextMenu

/*

const ContextMenu = ({boardId}) => {
    const {position,show}=useContextMenu();
    const menuStyle={
        position:"absolute",
        top:position.y,
        left:position.x
    }
    const options=boardId==='To do'?['In progress','Done']:boardId==='In progress'?['To do','Done']:['To do','In progress'];
  return (
    show?
    (<div style={menuStyle} className='contextMenu'>
        <ul>
            <li className='send'>Send to</li>
            <li>Delete</li>
            <li>Archive</li>
        </ul>
        <div className='drop-down'>
            {options.map((e,i)=><li key={i}>{e}</li>)}
        </div>
    </div>):(<></>)
  )
}


*/