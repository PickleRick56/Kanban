import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function InProgress({conditionInProgress, prop, onClick}) {
    
    
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

 <div className="task_title">InProgress</div>


 {conditionInProgress.map(artist => (
  <div className="tasks_cover"><Link to={`/${artist.id}`}>{artist.name}</Link></div>
))}


           <select className="input_submit"  onClick={changeStatus} id="tasks">
               {prop.map(key => (<option value={key.name}  >{key.name}</option>))}
            </select>






<button className="button_grey" onClick={hendler}>+Add card</button>
 </div>



      </>
    );
  }
  