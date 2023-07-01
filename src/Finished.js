import { useState } from 'react';
import { Link } from 'react-router-dom';


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
               {prop.map(key => (<option value={key.name}  >{key.name}</option>))}
            </select>




{conditionInProgress.map(artist => (
  <li ><Link to={`/${artist.id}`}>{artist.name}</Link></li>
))}
<p>выбранный элемент {status}</p>
<button onClick={hendler}>добавить</button>
 </div>



      </>
    );
  }
  