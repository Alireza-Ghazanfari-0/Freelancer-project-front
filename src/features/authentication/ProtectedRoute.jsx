import React, { useEffect } from "react";
import useUser from "./useUser";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../ui/Loader";

function ProtectedRoute({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isLoading, user } = useUser();
  const urlRole = pathname.split("/")[1];

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        navigate("/auth", { replace: true });
      } else if (user && urlRole !== user.role.toLowerCase()) {
        navigate("/not-access", { replace: true });
      }
    }
  }, [user, isLoading, navigate, urlRole]);
  if (!user || urlRole !== user.role.toLowerCase()) return null;
  if (isLoading) return <Loader />;
  return children;
}

export default ProtectedRoute;
