import { Link} from 'react-router-dom';
import { useState, useEffect } from 'react';



export default function ContentPage ({prop, discriprionId,setDiscriprionId, discriprionForKey}){
    const [topic, setTopic] = useState(discriprionForKey);
    const [display, setDisplay] = useState('false');
    


 

   let taskProp=[];
  console.log(discriprionId.length)


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
        
        <div className='content_page'>
            <div className="title_wrapper">
               <div  className="fperformance_issues" >{prop.name}</div>
               <div className="page_closer"  onClick={() => {     addDiscriprion();        }}><Link  to={`/`}>X</Link></div>
            </div>

        <textarea  className="footer_textarea" style={{border:'none'}}  value={topic} onChange={e => setTopic(e.target.value)}></textarea>
        
        </div>


   


        






        </>
    )
    }


