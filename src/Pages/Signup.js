import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { addUser } from "../Utilities/http";

export default function Signup() {
    const [user, setUser] = useState({ name: "", email: "", password: "", rePassword: "" });

    function formHandler(evt) {
        setUser({ ...user, [evt.target.name]: evt.target.value })
    }

    function submitHandler(evt) {
        evt.preventDefault();
        addUser(user.name, user.email, user.password);
        setUser({ name: "", email: "", password: "", rePassword: "" });


    }
    return (
        <main className="signin">
            <section className="main">
                <h2> Create account</h2>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your name </Form.Label>
                        <Form.Control type="name" placeholder="Enter your name"
                            name="name" value={user.name} onChange={formHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email"
                            name="email" value={user.email} onChange={formHandler} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>s
                        <Form.Control type="password" placeholder="Enter your password"
                            name="password" value={user.password} onChange={formHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword again">
                        <Form.Label>Password</Form.Label>s
                        <Form.Control type="password" placeholder="Enter your password"
                            name="rePassword" value={user.rePassword} onChange={formHandler} />
                    </Form.Group>

                    <Button variant="primary" id="submitAccountButton" type="submit"
                    onClick={submitHandler}>
                        Submit
                    </Button>
                </Form>
                <p>Already have an account? <Link to={"/login"}>Sign in</Link>  </p>
            </section>

        </main>
    )
}