import { useState, useEffect, Component } from 'react';


export default function Footer ( {prop}){
  let taskscondition=()=>{
    const items = JSON.parse(localStorage.getItem('conditionKey'));
    if(Array.isArray(items)){
      return items.length
    }
    return 's';
  }


  let tasksReady=()=>{
    const items = JSON.parse(localStorage.getItem('conditionReadyKey'));
    if(Array.isArray(items)){
      return items.length
    }
    return 's';
  }

  let tasksInProgress=()=>{
    const items = JSON.parse(localStorage.getItem('conditionInProgressKey'));
    if(Array.isArray(items)){
      return items.length
    }
    return 's';
  }

  let tasksFinished=()=>{
    const items = JSON.parse(localStorage.getItem('conditionFinishedKey'));
    if(Array.isArray(items)){
      return items.length
    }
    return 's';
  }

    /* useEffect(() => {
  
    const items = JSON.parse(localStorage.getItem('сomponents'));
    if (items) {
      
      setTasksForFooter(items);
    }
    
  }, []);  */
    return(
    <>
    
  {/*<div> {`Active tasks:<${(prop[0]===undefined ? 'no': Number.isNaN(prop[0].length)?  0 : prop[0].length)+(prop[1]===undefined ? 'no': Number.isNaN(prop[1].length)?  0 : prop[1].length)+(prop[2]===undefined ? 'no': Number.isNaN(prop[2].length)?  0 : prop[2].length) }> Finished tasks: <${(prop[3]===undefined ? 'no': Number.isNaN(prop[3].length)?  0 : prop[3].length )}>  Kanban board by <NAME>, <YEAR>`}         </div> */}

    {/*  <div> {`Active tasks:<${taskscondition.length + tasksReady.length + tasksInProgress.length}> Finished tasks: <${tasksFinished.length}>   Kanban board by <NAME>, <YEAR>`}            </div> */}

    <div> {`Active tasks:<${(prop[0]===undefined ? taskscondition(): Number.isNaN(prop[0].length)?  '0'  : prop[0].length)+(prop[1]===undefined ? tasksReady(): Number.isNaN(prop[1].length)?  '0' : prop[1].length)+(prop[2]===undefined ? tasksInProgress(): Number.isNaN(prop[2].length)?  '0' : prop[2].length) }> Finished tasks: <${(prop[3]===undefined ? tasksFinished(): Number.isNaN(prop[3].length)?  0 : prop[3].length )}>  Kanban board by <NAME>, <YEAR>`}         </div>
               
    </>
    
    )
    
    }