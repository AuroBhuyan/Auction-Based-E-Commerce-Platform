import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(null); // null means "loading"
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      if (!auth?.token) {
        setOk(false);
        return;
      }

      try {
        const res = await axios.get("/api/auth/admin-auth", {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
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
