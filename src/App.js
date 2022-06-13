import React,{useState} from 'react';
import './App.css';
import Header from './components/header/Header';
import Boards from './components/boards/Boards';
import data from './database/data';
function App() {
  const allData=data;
  const [tasks,setTasks]=useState(allData);
  const [showArchive,setShowArchive]=useState(false);
  return (
    <div className="App">
      <Header showArchive={showArchive} setShowArchive={setShowArchive} tasks={tasks} setTasks={setTasks}/>
      <Boards showArchive={showArchive} tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
