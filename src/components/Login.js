import React, { useRef, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      toast(error.message, {
        type: "error",
      });
    }

    setLoading(false);
  }

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}>
        <div>
          <Card style={{ backgroundColor: "rgb(27, 27, 27)" }}>
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    required
                    className="mt-2"
                  />
                </Form.Group>
                <Form.Group id="password" className="mt-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    required
                    className="mt-2"
                  />
                </Form.Group>
                <Button disabled={loading} type="submit" className="mt-4 w-100">
                  Log In
                </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-4">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
}
