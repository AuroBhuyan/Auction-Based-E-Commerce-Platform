import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";

const Orders = () => {
  return (
    <Layout title={"Your Orders"}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <UserMenu />
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4 bg-white shadow-md rounded-xl p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Orders</h1>
            <p className="text-gray-600">
              Here you can view and track all your orders.
            </p>

            {/* Example Orders Table */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="px-4 py-2 border">Order ID</th>
                    <th className="px-4 py-2 border">Date</th>
                    <th className="px-4 py-2 border">Status</th>
                    <th className="px-4 py-2 border">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">#12345</td>
                    <td className="px-4 py-2 border">2025-09-11</td>
                    <td className="px-4 py-2 border text-green-600 font-semibold">Delivered</td>
                    <td className="px-4 py-2 border">$120</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">#12346</td>
                    <td className="px-4 py-2 border">2025-09-09</td>
                    <td className="px-4 py-2 border text-yellow-600 font-semibold">Pending</td>
                    <td className="px-4 py-2 border">$85</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
