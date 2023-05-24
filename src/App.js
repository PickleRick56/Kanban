
import ShowDesk from './ShowDesk';
import { useState, useEffect } from 'react';
import { Routes , Route} from 'react-router-dom';





export default function App (){
  const [сomponents, setComponents]=useState([]); 
 
  useEffect(() => {
  
    const items = JSON.parse(localStorage.getItem('сomponents'));
    if (items) {
      
      setComponents(items);
    
    }
  
  
    
  }, []);

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