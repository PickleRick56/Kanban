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
    
 <div className="tasks_bg">

 <div className="task_title">Finished</div>

 {conditionInProgress.map(artist => (
  <div  className="tasks_cover"><Link to={`/${artist.id}`}>{artist.name}</Link></div>
))}
           <select  onClick={changeStatus} id="tasks">
               {prop.map(key => (<option value={key.name}  >{key.name}</option>))}
            </select>





<p>выбранный элемент {status}</p>
<button className="button_grey" onClick={hendler}>+Add card</button>
 </div>



      </>
    );
  }
  