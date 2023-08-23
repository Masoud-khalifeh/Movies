import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

export default function Login() {
    const [user, setUser] = useState({ email: "", password: ""});
    const [error, setError] = useState({});

    function formHandler(evt) {
        setUser({ ...user, [evt.target.name]: evt.target.value });
        setError({});
    }

    const isValidEmail = (email) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailPattern.test(email);
    };

    function submitHandler(evt) {
        evt.preventDefault();
        if (!isValidEmail(user.email) || !user.email || !user.password) {
            let error = {};
            if (!isValidEmail(user.email)) {
                error = { ...error, email: "Email is wrong! !" }
            }
            if (user.email === "") {
                error = { ...error, email: "Fill the email please !" }
            }
            if (user.password === "") {
                error = { ...error, password: "Fill the password please !" }
            }
            setError(error);
        } else {
            setUser({ email: "", password: "" });

        }
    }


    return (
        <main className="signin">
            <section className="main">
                <h2> Log in</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email"
                            name="email" value={user.email} onChange={formHandler} />
                        {error.email && <div className="alert alert-danger errorMessage" role="alert">
                            {error.email}
                        </div>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>s
                        <Form.Control type="password" placeholder="Enter your password"
                            name="password" value={user.password} onChange={formHandler} />
                        {error.password && <div className="alert alert-danger errorMessage" role="alert">
                            {error.password}
                        </div>}
                    </Form.Group>
                    <Button variant="primary" id="submitAccountButton" type="submit"
                    onClick={submitHandler}>
                        Submit
                    </Button>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Keep me signed in." />
                    </Form.Group>
                    <p>New to this website? <Link to={"/Signup"}>Sign in</Link>  </p>
                </Form>
            </section>

        </main>
    )
}