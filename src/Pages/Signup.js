import React, { useState, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../Utilities/http";
import { MovieContextModule } from "../Store/Context/MovieContext";

export default function Signup() {
    const [user, setUser] = useState({ name: "", email: "", password: "", rePassword: "" });
    const [error, setError] = useState({});

    const sharedData=useContext(MovieContextModule);
    const navigate = useNavigate();

    function formHandler(evt) {
        
        setUser({ ...user, [evt.target.name]: evt.target.value });
        setError({});
    }

    const isValidEmail = (email) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailPattern.test(email);
    };

    const isValidPassword = (password) => {
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        // const hasSpecialChar = /[@#$%^&+=]/.test(password);

        return (
            password.length >= minLength &&
            hasUppercase &&
            hasLowercase &&
            hasNumber
            // hasSpecialChar
        );
    };
    async function submitHandler(evt) {
        evt.preventDefault();
        if (!isValidEmail(user.email) || !user.name || !user.email || !user.password || !(user.password === user.rePassword) || !isValidPassword(user.password)) {
            let error = {};
            if (!isValidEmail(user.email)) {
                error = { ...error, email: "Email is wrong! !" }
            }
            if (user.name === "") {
                error = { ...error, name: "Fill the name please !" }
            }
            if (user.email === "") {
                error = { ...error, email: "Fill the email please !" }
            }
            if (user.password === "") {
                error = { ...error, password: "Fill the password please !" }
            } else {
                if (!isValidPassword(user.password)) {
                    error = { ...error, password: "Password must be at least 8 character, combination of small letters, capital letters, and numbers." }
                } else {
                    if (user.rePassword === "") {
                        error = { ...error, rePassword: "Fill the password please !" }
                    }
                    if (!(user.password === user.rePassword)) {
                        error = { ...error, rePassword: "Password does not match !" }
                    }
                }
            }


            setError(error);
        } else {
            if (await addUser(user.name, user.email, user.password)==="User registered successfully")
             {
                navigate("/");
                sharedData.setUser(user);
                setUser({ name: "", email: "", password: "", rePassword: "" })
            }else{
                setError({...error, general:"Error in recording data"})
            }
        }
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
                        {error.name && <div className="alert alert-danger errorMessage" role="alert">
                            {error.name}
                        </div>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email"
                            name="email" value={user.email} onChange={formHandler} />
                        {error.email && <div className="alert alert-danger errorMessage" role="alert">
                            {error.email}
                        </div>}
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>s
                        <Form.Control type="password" placeholder="Enter your password"
                            name="password" value={user.password} onChange={formHandler} />
                        {error.password && <div className="alert alert-danger errorMessage" role="alert">
                            {error.password}
                        </div>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword again">
                        <Form.Label>Repeat Password</Form.Label>s
                        <Form.Control type="password" placeholder="Enter your password again"
                            name="rePassword" value={user.rePassword} onChange={formHandler} />
                        {error.rePassword && <div className="alert alert-danger errorMessage" role="alert">
                            {error.rePassword}
                        </div>}
                    </Form.Group>

                    <Button variant="primary" id="submitAccountButton" type="submit"
                        onClick={submitHandler}>
                        Submit
                    </Button>
                    {error.general && <div className="alert alert-danger errorMessage" role="alert">
                            {error.general}
                        </div>}
                </Form>
                <p>Already have an account? <Link to={"/login"}>Sign in</Link>  </p>
            </section>

        </main>
    )
}