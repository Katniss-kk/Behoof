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
          <Route path="/catalog" element={<CatalogProductsPage />} />
          <Route path="/catalog/:category" element={<CatalogProductsPage />}>
            <Route
              path="/catalog/:category/:brand"
              element={<CatalogProductsPage />}
            />
          </Route>
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
