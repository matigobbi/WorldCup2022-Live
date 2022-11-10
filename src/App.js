import './App.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
  const headers = { 'Content-Type': 'application/json' }
  fetch('https://api.npms.io/v2/search?q=react', { headers })
      .then(response => response.json())
      .then(data => this.setState({ totalReactPackages: data.total }));
    }, []);
  return (
<div>hello there </div>
  );
}

export default App;
