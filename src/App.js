import Backlog from "./Backlog";
import Ready from "./Ready";
import InProgress from "./InProgress";
import Finished from "./Finished";
import { useState, useEffect } from 'react';

export default function App (){
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
  
}, []);








  const addElement = (el) => {
    if( el===null || el===''){
      return;
    }
    
    localStorage.setItem('conditionKey', JSON.stringify([...condition, el]));
    setCondition([...condition, el]);
  }


  const delElement = (el) => {
     
     const result = condition.filter(key =>  el!==key);
     localStorage.setItem('conditionKey', JSON.stringify(result));

    setCondition(result);
    
  }

  const delElementR = (el) => {
     
    const result = conditionReady.filter(key =>  el!==key);
    localStorage.setItem('conditionReadyKey', JSON.stringify(result));

    
    setConditionReady(result);
 }

 const delElementF = (el) => {
     
  const result = conditionInProgress.filter(key =>  el!==key);
  localStorage.setItem('conditionInProgressKey', JSON.stringify(result));
  setConditionInProgress(result);
}




  const addToDraw =(status)=>{
    if( status===null || status===''){
      return;
    }
    localStorage.setItem('conditionReadyKey', JSON.stringify([...conditionReady, status]));
    setConditionReady([...conditionReady, status]);
    delElement(status);
   
  }

  const addToDrawR =(status)=>{
    if( status===null || status===''){
      return;
    }
    localStorage.setItem('conditionInProgressKey', JSON.stringify([...conditionInProgress, status]));
    setConditionInProgress([...conditionInProgress, status]);
    delElementR(status);
   
  }

  const addToDrawF =(status)=>{
    if(status===null || status===''){
      return;
    }
    localStorage.setItem('conditionFinishedKey', JSON.stringify([...conditionFinished, status]));
    setConditionFinished([...conditionFinished, status]);
    delElementF(status);
   
  }
 
  return(
<>



<Backlog prop={condition}  onClick={addElement}/>
    <Ready conditionReady={conditionReady} prop={condition} onClick={addToDraw}/>
    <InProgress conditionInProgress={conditionInProgress} prop={conditionReady} onClick={addToDrawR}/>
    <Finished conditionInProgress={conditionFinished} prop={conditionInProgress} onClick={addToDrawF}/>
<h1>Компонент App</h1>
 <p>тут размещенно состояние {condition}</p>
</>

   )
}