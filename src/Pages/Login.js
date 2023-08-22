import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

export default function Login() {

    return (
        <main className="signin">
            <section className="main">
                <h2> Log in</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" />
                    </Form.Group>

                    <Button variant="primary" id="submitAccountButton" type="submit">
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