import React, { useEffect, useState } from 'react';
import {Form, Input, message} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Layout/Spinner';

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const submitHandler = async (values) => {
        try {
            setLoading(true)
            const {data} = await axios.post("/users/login", values)
            message.success("Login Successfull");
            localStorage.setItem("user", JSON.stringify({...data.user, password:""}));
            setLoading(false);
            navigate("/");
        } catch (error) {
            setLoading(false);
            message.error("Invalid username or password");
        }
    }

    // Prvent for login user
    useEffect(() => {
        if (localStorage.getItem("user")) {
            navigate("/");
        }
    }, [navigate]);
    return (
        <>
            <div className="register-page">
                {loading && <Spinner />}
                <div className="login-card">
                    <Form layout="vertical" onFinish={submitHandler}>
                        <h1>Login Form</h1>
                        <Form.Item label="Email" name="email">
                            <Input type="email" />
                        </Form.Item>
                        <Form.Item label="Password" name="password">
                            <Input type="password"/>
                        </Form.Item>
                        <div className="d-flex justify-content-between">
                            <Link to="/register">Not a user ? Click here to login</Link>
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Login