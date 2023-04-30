import Backlog from "./Backlog";
import Ready from "./Ready";
import { useState } from 'react';

export default function App (){
  const [condition, setCondition]= useState([]);

  const addElement = (el) => {
    setCondition([...condition, el]);
  }


  const delElement = (el) => {
     
     const result = condition.filter(key =>  el!==key);
    setCondition(result);
  }
 
  return(
<>
<Backlog prop={condition}  onClick={addElement}/>
    <Ready name={'ready'} prop={condition} onClick={delElement}/>
 
<h1>Компонент App</h1>
 <p>тут размещенно состояние {condition}</p>
</>

   )
}