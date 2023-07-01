
import ShowDesk from './ShowDesk';
import { useState, useEffect, Component } from 'react';
import { Routes , Route,Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ContentPage from './ContentPage';


export default function App (){
  const [сomponents, setComponents]=useState([]); 
  const [allProp, setAllProp]=useState([]); 
  
  useEffect(() => {
  
    const items = JSON.parse(localStorage.getItem('сomponents'));
    if (items) {
      
      setComponents(items);
    }
    
  }, []);

function cat (items){

  let keyy=[];

  let key=items.filter(function(number) {
   
    return number.length>0;
  });
  

  for(let i=0; i<key.length; i++){

    for(let j=0; j<key[i].length; j++){

     keyy.push(key[i][j])
    
    }
    
  }


  setComponents(keyy);
  setAllProp(items);
}

return(
<>
<Header />
  
  <Routes>

<Route   path={`/`} element={<ShowDesk prop={сomponents}  getAllProp={cat}/>}/>

{/* {сomponents.map(key => (
  <Route   path={`${key.id}`} element={<><div>{key.name}</div><br/><br/> <div><Link to={`/`}>X</Link></div></>}/>
))} */}




{сomponents.map(key => (
  <Route   path={`${key.id}`} element={<ContentPage prop={key} comp={сomponents} />}/>
))}



  </Routes>

  <Footer prop={allProp}/>

</>
)
}