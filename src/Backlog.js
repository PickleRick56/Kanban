import { useState } from 'react';


let nextId = 0;

export default function Backlog() {
  const [topic, setTopic] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
    <div className="backlog">

    <h1>Backlog:</h1>
    
     
    <ul>
      {artists.map(artist => (
        <li key={artist.id}>{artist.name}</li>
      ))}
    </ul>

    <button onClick={() => {
      setArtists([
        ...artists,
        { id: nextId++, name: topic }
      ]);
    }}>Add</button>
    <input
      value={topic}
      onChange={e => setTopic(e.target.value)}
    />

    </div>
    </>
  );
}



