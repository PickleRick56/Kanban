import { Link} from 'react-router-dom';
import { useState, useEffect } from 'react';



export default function ContentPage ({prop, discriprionId,setDiscriprionId}){
    const [topic, setTopic] = useState('');
    const [display, setDisplay] = useState(false);
    
    let z=[...discriprionId];
   let taskProp=[];
  console.log(discriprionId)


function addDiscriprion(){


    
const items = discriprionId;
    if (items) {
         {/* когда в items чтото есть */}
       
   
           
         

            for (let i=0; i<items.length; i++){
                if(items[i].id===prop.id){
                    {/* ecли в items  нашелся данный элемет */}
                   console.log(items[i]);
                     items[i].discriprion=topic;
                     setDiscriprionId(([...items]));
                     return;
               }
            }

          

     taskProp={id:prop.id, name: prop.name, discriprion: topic};
     setDiscriprionId([...items,taskProp]);
    }
    
  else{
     {/* когда items пустй */}
    taskProp={id:prop.id, name: prop.name, discriprion: topic};
    localStorage.setItem('descriptionId', JSON.stringify([taskProp]));

  }
}


    return(
        <>
        
        <div>{prop.name}</div><br/><br/> <div><Link to={`/`}>X</Link></div>




        {display ?

<><button onClick={() => {     addDiscriprion();        setDisplay(false); }} >Submit</button> 
  <input value={topic} onChange={e => setTopic(e.target.value)}/>   </> 

:  <button onClick={() => {setDisplay(true);  setTopic('');}} >Add card</button>}






<h1>значение из инпуа {topic}</h1>

        </>
    )
    }


