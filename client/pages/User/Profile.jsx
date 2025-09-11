import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";

const Profile = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <UserMenu />
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4 bg-white shadow-md rounded-xl p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Your Profile
            </h1>
            <p className="text-gray-600">
              Welcome to your profile dashboard. Manage your account details and
              settings here.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
