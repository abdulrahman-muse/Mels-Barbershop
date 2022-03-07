import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Button, Alert, FloatingLabel } from "react-bootstrap";

function LoginForm({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => setUser(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <Container>
            <Form style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} onSubmit={handleSubmit}>
                <Form.Group>
                    <FloatingLabel label="Username">
                        <Form.Control
                            type="text"
                            id="username"
                            autoComplete="username"
                            value={username}
                            placeholder="Username"
                            className="mb-3"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </FloatingLabel>
                    <FloatingLabel label="Password">
                        <Form.Control
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            placeholder="Password"
                            className="mb-3"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FloatingLabel>
                    <Button variant="dark" className='m-3' type="submit"> {isLoading ? "Loading..." : "Login"} </Button>
                    <div>
                        {errors.map((err) => (
                            <Alert key={err} variant={'danger'}>{err}</Alert>
                        ))}
                    </div>
                </Form.Group>
            </Form>
        </Container>
    );
}

export default LoginForm;