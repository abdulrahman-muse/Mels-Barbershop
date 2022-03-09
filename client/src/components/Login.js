import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button } from "react-bootstrap";

function Login({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <section>
            <div className='App'>
                <Container>
                    <h1 className='m-5'>Mel's Barbershop 💈</h1>
                    {showLogin ? (
                        <>
                            <LoginForm setUser={setUser} />
                            <hr />
                            <p>
                                Don't have an account? &nbsp;
                                <Button variant="dark" className='m-1' type="submit" onClick={() => setShowLogin(false)}>Sign Up</Button>
                            </p>
                        </>
                    ) : (
                        <>
                            <SignUpForm setUser={setUser} />
                            <hr />
                            <p>
                                Already have an account? &nbsp;
                                <Button variant="dark" className='m-1' type="submit" onClick={() => setShowLogin(true)}>Log In</Button>
                            </p>
                        </>
                    )}
                </Container>
            </div>
        </section>
    );
}


export default Login;