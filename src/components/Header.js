import React, { useState } from "react";
import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Header = ({ setUser }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/login");
    } catch (error) {
      toast(error.message, {
        type: "error",
      });
    }
  }

  const fetchDetails = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/users/${query}`);
      const data = response.data;
      setUser(data);
    } catch (error) {
      toast(
        error.message === "Request failed with status code 404"
          ? "User not found"
          : error.message,
        {
          type: "error",
        }
      );
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" fixed="top">
        <Form inline onSubmit={fetchDetails}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 searchInput mr-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <Button type="submit" variant="outline-success" disabled={loading}>
            <i className="fas fa-search" />
          </Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
        </Form>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              style={{ color: "rgb(255 255 255 / 94%)" }}
              onClick={() => {
                setUser();
                setQuery("");
              }}>
              <i className="fab fa-gratipay mr-1"></i>
              Favorite Repo
            </Nav.Link>
            <Nav.Link
              onClick={handleLogout}
              style={{ color: "rgb(255 255 255 / 94%)" }}>
              <i className="fas fa-sign-out-alt mr-1"></i>Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
