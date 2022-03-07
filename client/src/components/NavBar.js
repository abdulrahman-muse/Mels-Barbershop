import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button} from "react-bootstrap";

function NavBar({ setUser, user }) {

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={NavLink} exact to={"/"}>Mel's Barbershop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} exact to={"/"}>Home</Nav.Link>
                        <Nav.Link as={NavLink} exact to={"/barbers"}>Services</Nav.Link>
                        <Nav.Link as={NavLink} exact to={"/my-appointments"}>My Appointments</Nav.Link>
                    </Nav>
                    <Nav>
                    <Button variant="secondary" onClick={handleLogoutClick}>Logout</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar