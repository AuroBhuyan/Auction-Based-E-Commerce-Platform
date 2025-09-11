import React from "react";
import Layout from "../../components/Layout/Layout.jsx";
import AdminMenu from "../../components/Layout/AdminMenu.jsx";
import { useAuth } from "../../context/auth.jsx";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <AdminMenu />
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 bg-white shadow-md rounded-xl p-6">
            <h1 className="text-xl font-semibold text-gray-800">
            Admin Name: {auth?.user?.name}
            </h1>
            <h1 className="text-xl font-semibold text-gray-800">
            Admin Email:  {auth?.user?.email}
            </h1>
            <h1 className="text-xl font-semibold text-gray-800">
            Admin Contact: {auth?.user?.phone}
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
