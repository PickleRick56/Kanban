import { Link} from 'react-router-dom';
import { useState, useEffect } from 'react';



export default function ContentPage (prop,comp, setComponents){
    const [topic, setTopic] = useState('');
    const [display, setDisplay] = useState(false);
    
    let z=[...prop.comp];
   let taskProp=[];
  


function addDiscriprion(){


    
const items = JSON.parse(localStorage.getItem('descriptionId'));
    if (items) {
         {/* когда в items чтото есть */}
       
   
           
         

            for (let i=0; i<items.length; i++){
                if(items[i].id===prop.prop.id){
                    {/* ecли в items  нашелся данный элемет */}
                   console.log(items[i]);
                     items[i].discriprion=topic;
                     localStorage.setItem('descriptionId', JSON.stringify([...items]));
                     return;
               }
            }

          

     taskProp={id:prop.prop.id, name: prop.prop.name, discriprion: topic};
     localStorage.setItem('descriptionId', JSON.stringify([...items,taskProp]));
    }
    
  else{
     {/* когда items пустй */}
    taskProp={id:prop.prop.id, name: prop.prop.name, discriprion: topic};
    localStorage.setItem('descriptionId', JSON.stringify([taskProp]));

  }
}


    return(
        <>
        
        <div>{prop.prop.name}</div><br/><br/> <div><Link to={`/`}>X</Link></div>




        {display ?

<><button onClick={() => {   addDiscriprion();  setDisplay(false); }} >Submit</button> 
  <input value={topic} onChange={e => setTopic(e.target.value)}/>   </> 

:  <button onClick={() => {setDisplay(true);  setTopic('');}} >Add card</button>}






<h1>значение из инпуа {topic}</h1>

        </>
    )
    }


