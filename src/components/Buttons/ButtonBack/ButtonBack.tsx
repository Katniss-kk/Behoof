import ArrowButtonSVG from "@/assets/SVG/ArrowButtonSVG/ArrowButtonSVG";
import { useNavigate } from "react-router-dom";

export default function ButtonBack() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleClickBack}
      className="bg-[var(--bg-input-color)] rounded-lg px-5 h-full rotate-90"
    >
      <ArrowButtonSVG />
    </button>
  );
}
