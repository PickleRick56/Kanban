
import ShowDesk from './ShowDesk';
import { useState, useEffect, Component } from 'react';
import { Routes , Route} from 'react-router-dom';





export default function App (){
  const [сomponents, setComponents]=useState([]); 
 
  function setProperty(key){
    setComponents(key);
  }

console.log(сomponents);

return(
<>

  
  <Routes>

<Route   path={`/`} element={<ShowDesk prop={сomponents} setProp={setComponents}/>}/>


{сomponents.map(key => (
  <Route   path={`${key.id}`} element={<h1>{key.name}</h1>}/>
))}



  </Routes>

</>
)
}