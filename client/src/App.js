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
import Booking from './components/Booking';




function App() {

  const [user, setUser] = useState(null);
  const [barbers, setBarbers] = useState([]);
  const [services, setServices] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [errors, setErrors] = useState([]);
  


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

  useEffect(() => {
    fetch("/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      })
  }, []);

  useEffect(() => {
    fetch("/appointments")
      .then((response) => response.json())
      .then((data) => {
        setAppointments(data);
      })
  }, []);

  const bookAppt = (formData) => {
    fetch("/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        response.json().then((newAppt) => setAppointments([...appointments, newAppt]));
        
      } else {
        response.json().then((errorData) => setErrors(errorData.errors));
      }
    })
  }


  function cancelAppt(id) {
    fetch(`/appointments/${id}`, {
      method: "DELETE",
    })
      .then((deletedAppt) => {
        console.log(deletedAppt)
        const filteredAppts = appointments.filter((a) => a.id !== id)
        setAppointments(filteredAppts)
      });
  }


  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="App">
      <Router>
      <NavBar setUser={setUser} user={user} />
      <Switch>
        <Route exact path="/">
          <Home barbers={barbers} services={services} />
        </Route>
        <Route exact path="/booking">
          <Booking cancelAppt={cancelAppt} barbers={barbers} errors={errors} services={services} user={user} bookAppt={bookAppt} appointments={appointments}/>
        </Route>
        <Route exact path="/booking/:id">
          <Booking cancelAppt={cancelAppt} barbers={barbers} errors={errors} services={services} user={user} bookAppt={bookAppt} appointments={appointments}/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
