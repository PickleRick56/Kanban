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
    
 <div className="tasks_bg">

 <div className="task_title"> Ready</div>
           

            

 
  {conditionReady.map(artist => (<div className="tasks_cover" id={artist.id} ><Link to={`/${artist.id}`}>{artist.name}</Link></div>))}
  

  <select  className="input_submit"  onClick={changeStatus} id="tasks">
               {prop.map(key => (<option value={key.name}  >{key.name}</option>))}
            </select>





<button className="button_grey" onClick={hendler}>+Add card</button>
 </div>

 

      </>
    );
  }
  