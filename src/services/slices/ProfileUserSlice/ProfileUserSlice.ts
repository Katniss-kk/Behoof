import { IUser } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  setCookie,
  getCookie,
  deleteCookie,
} from "@utils/CookieUtils/CookieUtils";

interface UserState {
  user: IUser | null;
  isAuth: boolean;
  token: string | null;
  loading: boolean;
}

const initialState: UserState = {
  user: null,
  isAuth: false,
  token: null,
  loading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; user: IUser }>) => {
      state.isAuth = true;
      state.token = action.payload.token;
      setCookie("auth_token", action.payload.token, 7);
      if (state.user) {
        state.user.email = action.payload.user.email;
        state.user.password = action.payload.user.password;
      }
      localStorage.setItem("user_data", JSON.stringify(action.payload.user));
      state.loading = false;
    },
    logout: (state) => {
      state.isAuth = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem("user_data");
      deleteCookie("auth_token");
    },
    checkAuth: (state) => {
      const token = getCookie("auth_token");
      if (token) {
        state.isAuth = true;
        state.token = token;
        try {
          const userData = localStorage.getItem("user_data");
          if (userData) {
            state.user = JSON.parse(userData) as IUser;
          }
        } catch (error) {
          console.error("Error parsing user data from localStorage:", error);
        }
      }
      state.loading = false;
    },
    changeUserInfo: (state, action: PayloadAction<IUser>) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
      localStorage.setItem("user_data", JSON.stringify(state.user));
    },
    registerUser: (state, action: PayloadAction<{token: string, user: IUser}>) => {
      state.isAuth = true;
      state.user = action.payload.user;
      state.isAuth = true;
      state.token = action.payload.token;
      setCookie("auth_token", action.payload.token, 7);
      localStorage.setItem("user_data", JSON.stringify(action.payload.user));
      state.loading = false;
    },
  },
});

export const { login, logout, checkAuth, changeUserInfo, registerUser } =
  userSlice.actions;
export default userSlice.reducer;
