import "./App.css";
import "../Variables/Variables.css";
import { MobileMenu } from "../MobileMenu";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@Pages/HomePage";
import CatalogPage from "@Pages/CatalogPage";
import { Header } from "@components/Header";
import CatalogProductsPage from "@components/Pages/CatalogProductsPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogmenu" element={<CatalogPage />} />
        <Route path="/catalog" element={<CatalogProductsPage />} />
        <Route path="/catalog/:name" element={<CatalogProductsPage />}>
          <Route path="/catalog/:name/:name" element={<CatalogProductsPage />} />
        </Route>
        {/* <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
      <MobileMenu />
    </Router>
  );
}

export default App;
