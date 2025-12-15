import { useLocation } from "react-router-dom";
import { MobileMenuUI } from "../UI";

export default function MobileMenu() {
  const location = useLocation();
  if (location.pathname === "/catalog") {
    return null;
  }

  return <MobileMenuUI />;
}
