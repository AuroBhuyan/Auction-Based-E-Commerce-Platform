import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "../components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PagenotFound from "../pages/PagenotFound";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import { toast } from "react-toastify";
import AdminRoute from "../components/Routes/AdminRoute.jsx";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import PrivateRoute from "../components/Routes/PrivateRoute.jsx";
import Dashboard from "../pages/User/Dashboard.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
