import { useState } from 'react';

const arrExample=['cat','dog', 'job'];


export default function Ready({name}) {
    const [topic, setTopic] = useState('');
    const [artists, setArtists] = useState([]);
  
    return (
      <>
 <div>

 <h1>{name}</h1>
<select id="tasks">
{arrExample.map(key => (
        <li value={key}>{key}</li>
      ))}

  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="vw">VW</option>
  <option value="audi" selected>Audi</option>
</select>

 </div>



      </>
    );
  }
  
  