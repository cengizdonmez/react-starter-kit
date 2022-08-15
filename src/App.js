import './tailwind.css'
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Cengiz');

  const handleClick = () => {
    setName('Beyza')
  }

  return (
    <div className="app">
      <h2>useState</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Change Name</button>
      {/* <button onClick={() => setName('Beyza')}>Change Name</button> */}
    </div>
  );
}

export default App;
