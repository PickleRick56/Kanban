import { useState } from 'react';




export default function Finished({conditionInProgress, prop, onClick}) {
    
    
    const [status, setStatus] = useState(null);

    function changeStatus(e) {
      setStatus(e.target.value);
      
    }



function hendler(){
  onClick(status);
  setStatus(null);
}

    return (
      <>
 <div>

 <h1>Finished</h1>
           <select  onClick={changeStatus} id="tasks">
               {prop.map(key => (<option value={key}  >{key}</option>))}
            </select>




{conditionInProgress.map(artist => (
  <li >{artist}</li>
))}
<p>выбранный элемент {status}</p>
<button onClick={hendler}>добавить</button>
 </div>



      </>
    );
  }
  