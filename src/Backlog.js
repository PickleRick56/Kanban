import { useState } from 'react';
import { Routes , Route, Link } from 'react-router-dom';




export default function Backlog({prop,onClick}) {
  const [topic, setTopic] = useState('');
  const [display, setDisplay] = useState(false);


  return (
    <>
    
    <div className="backlog">

    <h1>Backlog:</h1>
    
    {display ?

     <><button onClick={() => { onClick(topic);  setTopic('');  setDisplay(false); }} >Submit</button> 
       <input value={topic} onChange={e => setTopic(e.target.value)}/>   </> 

    :  <button onClick={() => {setDisplay(true); }} >Add card</button>}

    

   




   <header>

   {prop.map(key => (
   <div id={key.id}> <Link to={`/${key.id}`}>{key.name}</Link></div>
 
))}



   </header>
<Routes>


{prop.map(key => (
   <Route path={`/${key.id}`} element={function  (){
    return(
     <>
      <div>{key.name}</div>
      <div>{key.discriprion}</div>
     </>
    );
  }()}/>
 
))}




</Routes>

  



    </div>
  
    </>
  );
}
