import './App.css';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import MyAppointments from './components/MyAppointments';
import Barbers from './components/Barbers';
import BookingForm from './components/BookingForm';


let allServices = [

]


function App() {

  const [user, setUser] = useState(null);
  const [barbers, setBarbers] = useState([]);
  const [services, setServices] = useState(allServices);
  


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/barbers")
      .then((response) => response.json())
      .then((data) => {
        setBarbers(data);
      })
  }, []);


  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="App">
      <Router>
      <NavBar setUser={setUser} />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/my-appointments">
          <MyAppointments/>
        </Route>
        <Route exact path="/barbers">
          <Barbers barbers={barbers}/>
        </Route>
        <Route exact path="/booking">
          <BookingForm/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
