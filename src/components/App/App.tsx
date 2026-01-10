import "./App.css";
import "../Variables/Variables.css";
import { MobileMenu } from "../MobileMenu";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@Pages/HomePage";
import CatalogPage from "@Pages/CatalogPage";
import { Header } from "@components/Header";
import CatalogProductsPage from "@Pages/CatalogProductsPage";
import ProductCardSelectedPage from "@Pages/ProductCardSelectedPage";
import { useDispatch } from "@/services/store";
import { Suspense, useEffect } from "react";
import { setData } from "@/services/slices/DataProductsSlice/DataProductsSlice";
import ProtectedRoute from "@/utils/ProtectedRoute";
import { lazy } from "react";
const LoginPage = lazy(() => import("@Pages/LoginPage"));
const ProfilePage = lazy(() => import("@Pages/ProfilePage"));
const RegisterPage = lazy(() => import("@Pages/RegisterPage"));
const BasketPage = lazy(() => import("@Pages/BasketPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogmenu" element={<CatalogPage />} />

          <Route path="/catalog">
            <Route index element={<CatalogProductsPage />} />
            <Route path=":category" element={<CatalogProductsPage />} />
            <Route path=":category/:brand" element={<CatalogProductsPage />} />
          </Route>

          <Route
            path="/product/:productId"
            element={<ProductCardSelectedPage />}
          />
          <Route
            path="/catalog/:category/product/:productId"
            element={<ProductCardSelectedPage />}
          />
          <Route
            path="/catalog/:category/:brand/product/:productId"
            element={<ProductCardSelectedPage />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          <Route
              path="/profile/basket"
              element={
                <ProtectedRoute>
                  <BasketPage />
                </ProtectedRoute>
              }
            />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
        <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </Suspense>
      <MobileMenu />
    </Router>
  );
}

export default App;
