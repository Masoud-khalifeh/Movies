import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

export default function Signup() {

    return (
        <main className="signin">
            <section className="main">
                <h2> Create account</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your name </Form.Label>
                        <Form.Control type="name" placeholder="Enter your name" />
                    </Form.Group>

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

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Re-enter password </Form.Label>
                        <Form.Control type="re-password " placeholder="Enter your password again" />
                    </Form.Group>

                    <Button variant="primary" id="submitAccountButton" type="submit">
                        Submit
                    </Button>
                </Form>
                <p>Already have an account? <Link to={"/login"}>Sign in</Link>  </p>
            </section>

        </main>
    )
}