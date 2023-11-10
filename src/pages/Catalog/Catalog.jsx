import React, { useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import LoadMore from "../../components/LoadMore/LoadMore";
import RenderCard from "../../components/RenderCard/RenderCard";
import { Loader } from "../../components/Loader/Loader";
import { Container } from "../../components/RenderCard/RenderCard.styled";
import { selectLoader } from "../../redux/carSelector";
import { fetchCarsThunks } from "../../redux/thunks";
import { useDispatch, useSelector } from "react-redux";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoader);

  useEffect(() => {
    dispatch(fetchCarsThunks());
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Container>
        <Filter />
        <RenderCard />
        <LoadMore />
      </Container>
    </>
  );
};

export default CatalogPage;
