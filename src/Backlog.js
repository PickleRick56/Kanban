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
 
}} >Add</button>

    <input
      value={topic} id='cat'
      onChange={e => setTopic(e.target.value)}
    />
{prop.map(artist => (
  <li >{artist}</li>
))}
    </div>
    </>
  );
}



