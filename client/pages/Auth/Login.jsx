import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted", formData);
    // Add your API call or login logic here
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

          <Button type="submit">
            Login
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
