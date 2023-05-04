import { useState } from 'react';




export default function Backlog({prop,onClick}) {
  const [topic, setTopic] = useState('');



  return (
    <>
    <div className="backlog">

    <h1>Backlog:</h1>
    
    <button onClick={
() => {
  onClick(topic);
  setTopic('');
 
}} >Add</button>

    <input
      value={topic} 
      onChange={e => setTopic(e.target.value)}
    />
{prop.map(key => (
  <li >{key}</li>
))}
    </div>
    </>
  );
}



