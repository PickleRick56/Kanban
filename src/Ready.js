import { useState } from 'react';
import { Link } from 'react-router-dom';



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


            

  <ul>
  {conditionReady.map(artist => (<li ><Link to={`/${artist.id}`}>{artist.name}</Link></li>))}
  </ul>


<p>выбранный элемент {status}</p>
<button onClick={hendler}>добавить</button>
 </div>



      </>
    );
  }
  