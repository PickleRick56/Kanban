import { useState, useEffect } from 'react';
import { Routes , Route, Link } from 'react-router-dom';




export default function Backlog({prop,onClick}) {
  const [topic, setTopic] = useState('');
  const [display, setDisplay] = useState(false);


  useEffect(() => {
    let element = document.getElementById("buttonGtoB");

    if(typeof topic === 'string' && topic.length !== 0 && element.classList.contains('button_grey')){
     
      element.classList.remove('button_grey');
      element.classList.add('button_submit');
      
    }
   
   
       
    
    
     
  }, [topic]);

  return (
    <>
    
      
    <div className="tasks_bg">

<div className="task_title">Backlog:</div>










<header>

{prop.map(key => (
<div className="tasks_cover" id={key.id}> <Link to={`/${key.id}`}>{key.name}</Link></div>

))}



</header>
<Routes>


{prop.map(key => (

    <Route  path={`/${key.id}`} element={function  (){
    return(
     <>
      <div >{key.name}</div>
      <div>{key.discriprion}</div>
     </>
    );
    }()}/>


))}




</Routes>

{display ?

<>
<input className="input_submit" value={topic} onChange={e => setTopic(e.target.value)}/>
<button id='buttonGtoB' className="button_grey" onClick={() => { onClick(topic);  setTopic('');  setDisplay(false); }} >Submit</button> 
    </> 

:  <button className="button_grey" onClick={() => {setDisplay(true); }} >+Add card</button>}



</div>
   
  
    </>
  );
}
