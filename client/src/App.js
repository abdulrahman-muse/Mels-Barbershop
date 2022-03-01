import './App.css';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import NavBar from './components/NavBar';

function App() {

  const [user, setUser] = useState(null);
  


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="App">
      <NavBar setUser={setUser} />
      <h1>Hi</h1>
    </div>
  );
}

export default App;
