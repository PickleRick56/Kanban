import Backlog from "./Backlog";
import Ready from "./Ready";
import InProgress from "./InProgress";
import Finished from "./Finished";
import { useState } from 'react';

export default function App (){
  const [condition, setCondition]= useState([]);
  const [conditionReady, setConditionReady]=useState([]);
  const [conditionInProgress, setConditionInProgress]=useState([]);
  const [conditionFinished, setConditionFinished]=useState([]);


  const addElement = (el) => {
    setCondition([...condition, el]);
  }


  const delElement = (el) => {
     
     const result = condition.filter(key =>  el!==key);
    setCondition(result);
    
  }

  const delElementR = (el) => {
     
    const result = conditionReady.filter(key =>  el!==key);
    setConditionReady(result);
 }

 const delElementF = (el) => {
     
  const result = conditionInProgress.filter(key =>  el!==key);
  setConditionInProgress(result);
}




  const addToDraw =(status)=>{
    if( status===null || status===''){
      return;
    }
    setConditionReady([...conditionReady, status]);
    delElement(status);
   
  }

  const addToDrawR =(status)=>{
    if( status===null || status===''){
      return;
    }
    setConditionInProgress([...conditionInProgress, status]);
    delElementR(status);
   
  }

  const addToDrawF =(status)=>{
    if(status===null || status===''){
      return;
    }
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