import "./App.css";
import "../Variables/Variables.css";
import { MobileMenu } from "../MobileMenu";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@Pages/HomePage";
import CatalogPage from "@Pages/CatalogPage";
import { Header } from "@components/Header";
import CatalogProductsPage from "@components/Pages/CatalogProductsPage";
import { useDispatch } from "@/services/store";
import { Suspense, useEffect } from "react";
import { setData } from "@/services/slices/DataProductsSlice/DataProductsSlice";
import ProductCardSelectedPage from "../Pages/ProductCardSelectedPage";

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
