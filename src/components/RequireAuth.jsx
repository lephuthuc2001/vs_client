import React from "react";
import useAuth from "../hooks/useAuth";
function RequireAuth({ children }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <div>{children}</div>;
  else return <button></button>;
}

export default RequireAuth;
