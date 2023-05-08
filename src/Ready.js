import { useState } from 'react';




export default function Ready({conditionReady, prop, onClick}) {
    
    
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

 <h1>Ready</h1>
           <select  onClick={changeStatus} id="tasks">
               {prop.map(key => (<option value={key.name}  >{key.name}</option>))}
            </select>




{conditionReady.map(artist => (
  <li >{artist.name}</li>
))}
<p>выбранный элемент {status}</p>
<button onClick={hendler}>добавить</button>
 </div>



      </>
    );
  }
  