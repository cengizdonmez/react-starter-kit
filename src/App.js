import './tailwind.css';
import SiteContext from './context/SiteContext';
import Home from './Home';

import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');

  const data = {
    theme,
    setTheme,
  };

  return (
    <SiteContext.Provider value={data} className="app">
      <Home />
    </SiteContext.Provider>
  );
}

export default App;
