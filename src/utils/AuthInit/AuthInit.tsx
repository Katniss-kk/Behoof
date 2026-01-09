import { checkAuth } from "@/services/slices/ProfileUserSlice/ProfileUserSlice";
import { useDispatch } from "@/services/store";
import { useEffect } from "react";

export default function AuthInit() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return null;
}
