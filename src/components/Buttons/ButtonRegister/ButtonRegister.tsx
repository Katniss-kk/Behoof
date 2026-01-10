import { registerUser } from "@/services/slices/ProfileUserSlice/ProfileUserSlice";
import { useDispatch } from "@/services/store";
import { IButtonRegister, IUser } from "@/types/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonRegister({
  name,
  surName,
  city,
  email,
  pass,
  repeatPass,
}: IButtonRegister) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);
  const handleClick = () => {
    if (pass !== repeatPass) {
      return;
    }
    const mockToken = "mock_jwt_token_12345";
    setUser({
      name: name,
      surname: surName,
      city: city,
      email: email,
      password: pass,
    });
    if (user) {
      dispatch(registerUser({ token: mockToken, user }));
      navigate("/profile");
      window.location.reload();
    }
  };

  return (
    <button
      onClick={() => handleClick()}
      className="[font-family:var(--font-family)] text-[var(--button-text-color)] text-base font-medium text-center border rounded-lg bg-[var(--button-bg-color)] py-4"
    >
      Зарегистрироваться
    </button>
  );
}
