import {useState,useEffect,useCallback} from 'react'

const useContextMenu=(parent)=> {
    const [position,setPosition]=useState({x:0,y:0});
    const [show,setShow]=useState(false);
    const handleRightClick=useCallback((event)=>{
        event.preventDefault();
        setPosition({x:event.pageX,y:event.pageY});
        setShow(true);
    },[setPosition,setShow])
    const handleClick=useCallback((event)=>(
        show?setShow(false):null
    ),[show])
    useEffect(()=>{
        let instance=parent.current;
        instance.addEventListener('contextmenu',handleRightClick);
        //parent.current.addEventListener('click',handleClick);
        document.addEventListener('click',handleClick);
        return ()=>{
            instance.removeEventListener('contextmenu',handleRightClick);
            //parent.current.removeEventListener('click',handleClick);
            document.removeEventListener('click',handleClick);
        }
    })
  return {position,show};
}
export default useContextMenu;


/*
const useContextMenu=()=> {
    const [position,setPosition]=useState({x:0,y:0});
    const [show,setShow]=useState(false);
    const handleRightClick=useCallback((event)=>{
        event.preventDefault();
        setPosition({x:event.pageX,y:event.pageY});
        setShow(true);
    },[setPosition,setShow])
    const handleClick=useCallback((event)=>(
        show?setShow(false):null
    ),[show])
    useEffect(()=>{
        document.addEventListener('contextmenu',handleRightClick);
        document.addEventListener('click',handleClick);
        return ()=>{
            document.removeEventListener('contextmenu',handleRightClick);
            document.removeEventListener('click',handleClick);
        }
    })
  return {position,show};
}
*/