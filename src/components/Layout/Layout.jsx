import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
export default function Layout() {
  return (
    <div>
      <Outlet />
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
    </div>
  );
}
