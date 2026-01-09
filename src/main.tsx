import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "@components/App/App.tsx";
import { Provider } from "react-redux";
import store from "@/services/store.ts";
import { AuthProvider } from "@utils/AuthContext/AuthContext.tsx";
import AuthInit from "./utils/AuthInit/AuthInit";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <AuthInit />
        <App />
      </AuthProvider>
    </Provider>
  </StrictMode>
);
