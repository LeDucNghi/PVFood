import { Navigate, Outlet } from "react-router-dom";

import Cookies from "universal-cookie";
import React from "react";

export default function PrivateRoute() {
  const cookies = new Cookies();
  const account = cookies.get("information");

  const isLoggedIn = Boolean(account) && Boolean(account.role === "admin");

  return isLoggedIn ? <Outlet /> : <Navigate to="home" replace={true} />;
}
