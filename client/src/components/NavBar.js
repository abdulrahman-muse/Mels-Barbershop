import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ setUser }) {

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return (
        <div>
            <NavLink className="nav" exact to="/">Home</NavLink>
            <NavLink className="nav" exact to="/barbers">Barbers</NavLink>
            <NavLink className="nav" exact to="/my-appointments">My Appointments</NavLink>
            <NavLink className="nav" exact to="/booking">Book An Appointment</NavLink>
            <button className="nav" onClick={handleLogoutClick} >
                Logout
            </button>
        </div>
    )

}

export default NavBar