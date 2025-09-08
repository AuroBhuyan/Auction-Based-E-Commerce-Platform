import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function AdminRoute() {
  const [ok, setOk] = useState(null); // null = loading
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      if (!auth?.token) {
        console.log("❌ No auth token in context");
        setOk(false);
        return;
      }

      try {
        console.log("➡️ Checking /admin-auth with token:", auth.token);

        const res = await axios.get("/api/auth/admin-auth", {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });

        console.log("✅ Backend response:", res.data);

        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error("❌ authCheck error:", error.response?.data || error.message);
        setOk(false);
      }
    };

    authCheck();
  }, [auth?.token]);

  if (ok === null) {
    return <Spinner />;
  }

  return ok ? <Outlet /> : <Navigate to="/login" />;
}
