import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layuot/Layout";
import HomePage from "./pages/Home/Home";
import CatalogPage from "./pages/Catalog/Catalog";
import FavoritesPage from "./pages/Favorites/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
