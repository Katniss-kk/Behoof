import { useDispatch } from "@/services/store";
import { login } from "@/services/slices/ProfileUserSlice/ProfileUserSlice";
import { useNavigate } from "react-router-dom";
import { IUser } from "@/types/types";

export default function ButtonLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user: IUser = {
    email: email,
    password: password,
  };

  const handleLogin = () => {
    const mockToken = "mock_jwt_token_12345";

    dispatch(login({ token: mockToken, user }));

    navigate("/profile");
    window.location.reload();
  };

  return (
    <button
      onClick={handleLogin}
      className="[font-family:var(--font-family)] text-[var(--button-text-color)] text-base font-medium text-center border rounded-lg bg-[var(--button-bg-color)] py-4"
    >
      Войти
    </button>
  );
}
