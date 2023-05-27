
import ShowDesk from './ShowDesk';
import { useState, useEffect } from 'react';
import { Routes , Route,Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';



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
<Header/>
  
  <Routes>

<Route   path={`/`} element={<ShowDesk prop={сomponents} setProp={setComponents}/>}/>


{сomponents.map(key => (
  <Route   path={`${key.id}`} element={<><div>{key.name}</div><br/><br/> <div><Link to={`/`}>X</Link></div></>}/>
))}



  </Routes>

  <Footer/>

</>
)
}