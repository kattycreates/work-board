
const sendToProgress = (tasks,taskId) => {
    return tasks.map(t=>t.id===taskId?{...t,inProgress:true,newTask:false,completed:false}:t);
  
}
const sendToDone = (tasks,taskId) => {
    return tasks.map(t=>t.id===taskId?{...t,inProgress:false,newTask:false,completed:true}:t);
}
const sendToTasks = (tasks,taskId) => {
    return tasks.map(t=>t.id===taskId?{...t,inProgress:false,newTask:true,completed:false}:t);
}



export {sendToTasks,sendToProgress,sendToDone}
