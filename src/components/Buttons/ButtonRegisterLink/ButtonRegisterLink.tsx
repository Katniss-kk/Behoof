import { useNavigate } from "react-router-dom";

export default function ButtonRegisterLink() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };

  return (
    <button
      onClick={() => handleClick()}
      className="[font-family:var(--font-family)] text-[var(--menu-button-color)] text-base font-medium text-center bg-[var(--button-text-color)] rounded-lg py-4 w-full"
    >
      Зарегистрироваться
    </button>
  );
}
