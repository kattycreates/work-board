import React,{useState} from 'react'
import './header.css'
const Header = ({showArchive,setShowArchive,tasks,setTasks}) => {
  const [search,setSearch]=useState('');
  const handleSearch=()=>{
    const searchedTasks=tasks.filter(task=>task.title.match(new RegExp(search,'ig')));
    setTasks(searchedTasks);
  }

  const handleArchiveToggle=(e)=>{
    e.preventDefault();
    setShowArchive(!showArchive);
  }
  return (
    <div className='header'>
      <h2>WORK BOARD</h2>
      <div className='search-wrapper'>
        <div className='search'>
          <input className='search-box' type='text' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search task by title...'/>
          <button className='search-btn' onClick={handleSearch}>Search</button>
        </div>
       
        <button className='arc-btn' onClick={handleArchiveToggle}>{showArchive?"Hide archived tasks":"Show archived tasks"}</button>
      </div>
    </div>
  )
}

export default Header
