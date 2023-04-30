import Backlog from "./Backlog";
import Ready from "./Ready";
import { useState } from 'react';

export default function App (){
  const [condition, setCondition]= useState([]);
  const [conditionReady, setConditionReady]=useState([]);


  const addElement = (el) => {
    setCondition([...condition, el]);
  }


  const delElement = (el) => {
     
     const result = condition.filter(key =>  el!==key);
    setCondition(result);
  }


  const addToDraw =(status)=>{
    if( status===null){
      return;
    }
    setConditionReady([...conditionReady, status]);
    delElement(status);
   
  }
 
  return(
<>
<Backlog prop={condition}  onClick={addElement}/>
    <Ready conditionReady={conditionReady} prop={condition} onClick={addToDraw}/>
 
<h1>Компонент App</h1>
 <p>тут размещенно состояние {condition}</p>
</>

   )
}