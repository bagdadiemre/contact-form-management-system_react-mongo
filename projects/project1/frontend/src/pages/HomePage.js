import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { checkLogin, logout } from "../services/api";

import {
  Container,
  CssBaseline,
  Typography,
  Avatar,
  Button,
} from "@mui/material";

const HomePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    checkLogin(token)
      .then((data) => setUser(data.data.user))
      .catch(() => navigate("/login"));
  }, [navigate]);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        await logout(token);
      } catch (error) {
        console.log(error); // Handle logout error
      }
      localStorage.removeItem("token");
      navigate("/login"); // Use navigate to redirect
    }
  };

  const isAdmin = user?.role === "admin";
  const isReader = user?.role === "reader";

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Avatar>{/* You can display an icon or user photo here */}</Avatar>
        <Typography component="h1" variant="h5">
          Welcome, {user ? user.username : "Guest"}!
        </Typography>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
      <div>
        <Link to="/contact">Contact Us</Link>
      </div>
      {isAdmin && (
        <div>
          <Link to="/messages">Messages</Link>
          <Link to="/users">Users</Link>
          <Link to="/reports">Reports</Link>
        </div>
      )}
      {isReader && (
        <div>
          <Link to="/messages">Messages</Link>
        </div>
      )}
    </Container>
  );
};

export default HomePage;
