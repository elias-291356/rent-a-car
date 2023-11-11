import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layuot/Layout";
import HomePage from "./pages/Home/Home";
import CatalogPage from "./pages/Catalog/Catalog";
import FavoritesPage from "./pages/Favorites/Favorites";
import { useEffect } from "react";
import { fetchCarsThunks } from "./redux/thunks";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPage } from "./redux/carSelector";

function App() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  useEffect(() => {
    if (currentPage === 1) {
      dispatch(fetchCarsThunks());
    }
  }, [dispatch, currentPage]);

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
