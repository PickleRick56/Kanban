import { useState, useEffect, Component } from 'react';
let date = new Date().toLocaleDateString("ru-RU");

export default function Footer ( {prop}){
  let taskscondition=()=>{
    const items = JSON.parse(localStorage.getItem('conditionKey'));
    if(Array.isArray(items)){
      return items.length
    }
    return 'no';
  }


  let tasksFinished=()=>{
    const items = JSON.parse(localStorage.getItem('conditionFinishedKey'));
    if(Array.isArray(items)){
      return items.length
    }
    return 'no';
  }

    /* useEffect(() => {
  
    const items = JSON.parse(localStorage.getItem('сomponents'));
    if (items) {
      
      setTasksForFooter(items);
    }
    
  }, []);  */
    return(
    <>
    
  

    <div className="footer">
      <div className="footer_coverForTasks">
        <div className="footer_activeTask">{`Active tasks:<${(prop[0]===undefined ? taskscondition(): Number.isNaN(prop[0].length)?  '0'  : prop[0].length) }>  `}</div>
         <div>{`Finished tasks: <${(prop[3]===undefined ? tasksFinished(): Number.isNaN(prop[3].length)?  0 : prop[3].length )}>`}</div>
       </div>
       
       <div  className="footer_finishedTask">{`  Kanban board by <NAME>, ${date}`}</div>  
       
       </div>
            
    </>
    
    )
    
    }