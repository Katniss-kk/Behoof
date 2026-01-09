import { changeUserInfo } from "@/services/slices/ProfileUserSlice/ProfileUserSlice";
import { useDispatch } from "@/services/store";
import { IUser } from "@/types/types";

export default function ButtonSaveChange({
  name,
  surname,
  email,
  city,
}: {
  name: string;
  surname: string;
  email: string;
  city: string;
}) {
  const dispatch = useDispatch();

  const user: IUser = {
    name: name,
    surname: surname,
    email: email,
    city: city,
  };

  const handleClickSave = () => {
    dispatch(changeUserInfo(user));
  };

  return (
    <button
      onClick={() => handleClickSave()}
      className="[font-family:var(--font-family)] text-[var(--button-text-color)] text-base font-medium text-center border rounded-lg bg-[var(--button-bg-color)] py-4 w-full"
    >
      Сохранить изменения
    </button>
  );
}
