import { useState } from 'react';




export default function Ready({name, prop, onClick}) {
    
    const [conditionReady, setConditionReady]=useState([]);
    const [status, setStatus] = useState(null);

    function changeStatus(e) {
      setStatus(e.target.value);
      
    }

function addToDraw(){
  setConditionReady([...conditionReady, status]);
  onClick(status);
}

    return (
      <>
 <div>

 <h1>{name}</h1>
           <select  onClick={changeStatus} id="tasks">
               {prop.map(key => (<option value={key}  >{key}</option>))}
            </select>




{conditionReady.map(artist => (
  <li >{artist}</li>
))}
<p>выбранный элемент {status}</p>
<button onClick={addToDraw}>добавить</button>
 </div>



      </>
    );
  }
  
  