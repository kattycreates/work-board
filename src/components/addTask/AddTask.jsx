import React from 'react'
import './addTask.css'
import useContextMenu from '../../hooks/useContextMenu';
const AddTask = ({boardId,parent,setShow}) => {
    const {position,show}=useContextMenu(parent);
    const handleClick=(e)=>{
        e.preventDefault();
        setShow(true)
    }
    const menuStyle={
        position:"absolute",
        top:position.y-100,
        left:position.x+10
    }


  return (show?
    <button className='addTask' style={menuStyle} onClick={handleClick}>New task</button>:<></>
  )
}

export default AddTask