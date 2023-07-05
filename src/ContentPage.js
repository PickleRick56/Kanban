import { Link} from 'react-router-dom';
import { useState, useEffect } from 'react';



export default function ContentPage ({prop, discriprionId,setDiscriprionId}){
    const [topic, setTopic] = useState('');
    const [display, setDisplay] = useState(false);
    const [taskDescription, setTaskDescription] = useState(JSON.parse(localStorage.getItem('descriptionId')));


    let z=[...discriprionId];
   let taskProp=[];
  console.log(discriprionId)


function addDiscriprion(){

  const items = JSON.parse(localStorage.getItem('descriptionId'));
    

    if (items) {
         /* когда в items чтото есть */
       
   
           
         

            for (let i=0; i<items.length; i++){
                if(items[i].id===prop.id){
                    /* ecли в items  нашелся данный элемет */
               
                     items[i].discriprion=topic;
                     setDiscriprionId(([...items]));
                     localStorage.setItem('descriptionId', JSON.stringify([...items]));
                     return;
               }
            }
                        /* ecли в items не нашелся данный элемет */
          

     taskProp={id:prop.id, name: prop.name, discriprion: topic};
     setDiscriprionId([...items,taskProp]);
     localStorage.setItem('descriptionId', JSON.stringify([...items,taskProp]));
    }
    
  else{
     /* когда items пустoй */
    taskProp={id:prop.id, name: prop.name, discriprion: topic};
    setDiscriprionId([taskProp]);
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


