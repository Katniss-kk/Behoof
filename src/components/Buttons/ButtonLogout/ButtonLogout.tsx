import { logout } from "@/services/slices/ProfileUserSlice/ProfileUserSlice";
import { useDispatch } from "@/services/store";

export default function ButtonLogout() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <button onClick={() => handleClick()} className="[font-family:var(--font-family)] text-[var(--button-text-color)] text-base font-medium text-center border rounded-lg bg-[var(--button-bg-color)] py-4 w-full">
      Выйти
    </button>
  );
}
