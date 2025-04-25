import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navigate from "../Navigate/Navigate";
export default function Layout() {
  return (
    <div>
      <Navigate />
      <Outlet />

      {/* <Toaster position="top-center" reverseOrder={false} /> */}
    </div>
  );
}
