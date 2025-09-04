import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  // update form data when typing
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // actual login API call
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        formData
      );
      if (res && res.data.success) {
        toast.success(res.data.message);

        // ✅ update context with full auth object
        const updatedAuth = {
          ...auth,
          user: res.data.user,
          token: res.data.token,
        };
        setAuth(updatedAuth);

        // ✅ save same object to localStorage
        localStorage.setItem("auth", JSON.stringify(updatedAuth));

        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Login - Auctify">
      <div className="flex justify-center items-center min-h-[80vh]">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-lime-500 mb-6 text-center">
            Login
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
          </div>

          <Button type="submit">Login</Button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
