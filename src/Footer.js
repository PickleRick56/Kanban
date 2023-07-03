import { useState, useEffect, Component } from 'react';


export default function Footer ( {prop}){
  const [tasksForFooter, setTasksForFooter]=useState([]); 

  
  useEffect(() => {
  
    const items = JSON.parse(localStorage.getItem('сomponents'));
    if (items) {
      
      setTasksForFooter(items);
    }
    
  }, []);


    return(
    <>
    
      
     
      <div>{`Active tasks:< ${(Number.isNaN(prop[0].length)?  0 : prop[0].length )+ (Number.isNaN(prop[1].length)?  0 : prop[1].length ) + (Number.isNaN(prop[2].length)?  0 : prop[2].length )}> Finished tasks: <${(Number.isNaN(prop[3].length)?  0 : prop[3].length )}>  Kanban board by <NAME>, <YEAR>`} </div>
    </>
    
    )
    
    }