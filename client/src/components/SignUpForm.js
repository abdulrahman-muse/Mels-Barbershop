import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Button, Alert, FloatingLabel } from "react-bootstrap";

function SignUpForm({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
                email,
            }),
        }).then((response) => {
            setIsLoading(false);
            if (response.ok) {
                response.json().then((user) => setUser(user));
            } else {
                response.json().then((errorData) => setErrors(errorData.errors));
            }
        })
    }

    return (
        <Container>
            <Form style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} onSubmit={handleSubmit}>
                <Form.Group>
                    <FloatingLabel label="Username">
                        <Form.Control
                            placeholder="Username"
                            className="mb-3"
                            type="text"
                            id="username"
                            autoComplete="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </FloatingLabel>
                    <FloatingLabel label="Email">
                        <Form.Control
                            placeholder="Email"
                            className="mb-3"
                            type="text"
                            id="Email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FloatingLabel>
                    <FloatingLabel label="Password">
                        <Form.Control
                            placeholder="Password"
                            className="mb-3"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                        />
                    </FloatingLabel>
                    <FloatingLabel label="Password Confirmation">
                        <Form.Control
                            placeholder="Confirm Password"
                            className="mb-3"
                            type="password"
                            id="password_confirmation"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            autoComplete="current-password"
                        />
                    </FloatingLabel>
                    <Button variant="dark" className='m-3' type="submit"> {isLoading ? "Loading..." : "Sign Up"} </Button>
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

export default SignUpForm;