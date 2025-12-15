import "./App.css";
import "../Variables/Variables.css";
import { MobileMenu } from "../MobileMenu";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@Pages/HomePage";
import CatalogPage from "@Pages/CatalogPage";
import { Header } from "@components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:number" element={<CatalogPage />} />
        {/* <Route path="/catalog/:name" element=[] /> */}
        {/* <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
      <MobileMenu />
    </Router>
  );
}

export default App;
