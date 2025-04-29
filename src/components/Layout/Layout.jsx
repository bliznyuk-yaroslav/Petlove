import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navigate from "../Navigate/Navigate";
export default function Layout() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <Navigate />}
      <Outlet />
      <Toaster position="top-right" />
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
    </div>
  );
}
