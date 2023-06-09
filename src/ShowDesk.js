import Backlog from "./Backlog";
import Ready from "./Ready";
import InProgress from "./InProgress";
import Finished from "./Finished";
import { useState, useEffect } from 'react';






let counter=0;


export default function ShowDesk ({prop,getAllProp}){

 
  const [condition, setCondition]= useState([]);
  const [conditionReady, setConditionReady]=useState([]);
  const [conditionInProgress, setConditionInProgress]=useState([]);
  const [conditionFinished, setConditionFinished]=useState([]);
 

  useEffect(() => {
  
    const items = JSON.parse(localStorage.getItem('conditionKey'));
    if (items) {
      
      setCondition(items);
    
    }
  
  
    const items2 = JSON.parse(localStorage.getItem('conditionReadyKey'));
    if (items2) {
      setConditionReady(items2);
    }
  
  
    const items3 = JSON.parse(localStorage.getItem('conditionInProgressKey'));
    if (items3) {
      setConditionInProgress(items3);
    }
  
  
    const items4 = JSON.parse(localStorage.getItem('conditionFinishedKey'));
    if (items4) {
      setConditionFinished(items4);
    }

    const items5 = JSON.parse(localStorage.getItem('counter'));
    if (items5) {
      counter=items5;
    }
    
  }, []);



  useEffect(() => {
   getAllProp([condition,conditionReady,conditionInProgress,conditionFinished])
  }, [condition,conditionReady,conditionInProgress,conditionFinished]);
  
  






  const addElement = (el) => {
    if( el===null || el===''){
      return;
    }
    counter++;
    localStorage.setItem('conditionKey', JSON.stringify([...condition, {id:counter,name:el,discriprion:''}]));

    localStorage.setItem('сomponents', JSON.stringify([...prop, {id:counter,name:el,discriprion:''}]));
    setCondition([...condition, {id:counter,name:el,discriprion:''}]);
    localStorage.setItem('counter', JSON.stringify(counter));
  }


  const delElement = (el) => {
     
     const result = condition.filter(key =>  el!==key.name);
     localStorage.setItem('conditionKey', JSON.stringify(result));

    setCondition(result);
    
  }

  const delElementR = (el) => {
     
    const result = conditionReady.filter(key =>  el!==key.name);
    localStorage.setItem('conditionReadyKey', JSON.stringify(result));

    
    setConditionReady(result);
 }

 const delElementF = (el) => {
     
  const result = conditionInProgress.filter(key =>  el!==key.name);
  localStorage.setItem('conditionInProgressKey', JSON.stringify(result));
  setConditionInProgress(result);
}




  const addToDraw =(status)=>{
    if( status===null || status===''){
      return;
    }
    
     const {id} = condition.find((v)  => v.name ===  status)

    

    localStorage.setItem('conditionReadyKey', JSON.stringify([...conditionReady,  {id:id,name:status,discriprion:''}]));
    setConditionReady([...conditionReady, {id:id,name:status,discriprion:''}]);
    delElement(status);
   
  }

  const addToDrawR =(status)=>{
    if( status===null || status===''){
      return;
    }
   
     const {id} = conditionReady.find((v)  => v.name ===  status)
    localStorage.setItem('conditionInProgressKey', JSON.stringify([...conditionInProgress, {id:id,name:status,discriprion:''}]));
    setConditionInProgress([...conditionInProgress, {id:id,name:status,discriprion:''}]);
    delElementR(status);
   
  }

  const addToDrawF =(status)=>{
    if(status===null || status===''){
      return;
    }
    const {id} = conditionInProgress.find((v)  => v.name ===  status)
    localStorage.setItem('conditionFinishedKey', JSON.stringify([...conditionFinished, {id:id,name:status,discriprion:''}]));
    setConditionFinished([...conditionFinished, {id:id,name:status,discriprion:''}]);
    delElementF(status);
   
  }
 
  return(
<>
<div className="desk_wrapper max-width align_center">     
     <div >  <Backlog prop={condition}  onClick={addElement} /></div>     
     <div> <Ready conditionReady={conditionReady} prop={condition} onClick={addToDraw}/></div>     
     <div> <InProgress conditionInProgress={conditionInProgress} prop={conditionReady} onClick={addToDrawR}/></div>
     <div> <Finished conditionInProgress={conditionFinished} prop={conditionInProgress} onClick={addToDrawF}/></div>
</div>

   

    
    
   






</>

   )
}