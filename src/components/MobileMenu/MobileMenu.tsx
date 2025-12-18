import { useLocation } from "react-router-dom";
import { MobileMenuUI } from "../UI";

export default function MobileMenu() {
  const location = useLocation();
  if (location.pathname === "/catalogmenu") {
    return null;
  }

  return <MobileMenuUI />;
}
