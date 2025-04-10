import { useLocation } from "react-router-dom";
export default function useIsNewsPage() {
  const location = useLocation();
  return location.pathname === "/";
}
