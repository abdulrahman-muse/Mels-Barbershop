import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <section>
            <h1>Game Review App</h1>
            {showLogin ? (
                <>
                    <LoginForm setUser={setUser} />
                    <hr />
                    <p>
                        Don't have an account? &nbsp;
                        <button color="secondary" onClick={() => setShowLogin(false)}>
                            Sign Up
                        </button>
                    </p>
                </>
            ) : (
                <>
                    <SignUpForm setUser={setUser} />
                    <hr />
                    <p>
                        Already have an account? &nbsp;
                        <button color="secondary" onClick={() => setShowLogin(true)}>
                            Log In
                        </button>
                    </p>
                </>
            )}
        </section>
    );
}


export default Login; 