import React from "react";
import Filter from "../../components/Filter/Filter";

import { Loader } from "../../components/Loader/Loader";
import { Container } from "../../components/RenderCard/RenderCard.styled";
import { selectLoader } from "../../redux/carSelector";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import FavoritesCars from "../../components/FavoritesCars/FavoritesCars";

const FavoritesPage = () => {
  const isLoading = useSelector(selectLoader);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Container>
        <Filter />
        <FavoritesCars />
        <ToastContainer />
      </Container>
    </>
  );
};

export default FavoritesPage;
