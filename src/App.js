
import ShowDesk from './ShowDesk';
import { useState, useEffect, Component } from 'react';
import { Routes , Route,Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ContentPage from './ContentPage';


export default function App (){
  const [сomponents, setComponents]=useState([]); 
  const [allProp, setAllProp]=useState([]); 
  const [discriprionId, setDiscriprionId]=useState([]); 







  useEffect(() => {
  /* получения значений из localStorage */
    const items = JSON.parse(localStorage.getItem('сomponents'));
    if (items) {
      
      setComponents(items);
    }

    const items2 = JSON.parse(localStorage.getItem('descriptionId'));
    if (items2) {
      
      setDiscriprionId(items2);
    }
    
  }, []);


  

/*  useEffect(() => {
   
   
    
       
    localStorage.setItem('descriptionId', JSON.stringify(discriprionId));
    
     
  }, [discriprionId]);  */

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


function findDescription(key){
  for(let i=0; discriprionId.length>i;i++){
    if(discriprionId[i].id===key.id){
      return discriprionId[i].discriprion;
      
    }
  }
}


return(
<>
<Header />
  
  <Routes>

<Route   path={`/`} element={<ShowDesk prop={сomponents}  getAllProp={cat}/>}/>






{сomponents.map(key => (




  <Route   path={`${key.id}`} element={<ContentPage prop={key} discriprionId={discriprionId}  setDiscriprionId={setDiscriprionId} discriprionForKey={findDescription(key)}/>}/>
))}



  </Routes>

  <Footer prop={allProp}/>

</>
)
}