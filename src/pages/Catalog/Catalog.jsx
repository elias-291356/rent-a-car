import React from "react";
import Filter from "../../components/Filter/Filter";
import LoadMore from "../../components/LoadMore/LoadMore";
import RenderCard from "../../components/RenderCard/RenderCard";
import { Loader } from "../../components/Loader/Loader";
import { Container } from "../../components/RenderCard/RenderCard.styled";
import { selectCurrentPage, selectLoader } from "../../redux/carSelector";
import { fetchCarsThunks } from "../../redux/thunks";
import { useDispatch, useSelector } from "react-redux";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoader);
  const currentPage = useSelector(selectCurrentPage);

  const loadMoreHandler = () => {
    dispatch(fetchCarsThunks(currentPage));
  };
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Container>
        <Filter />
        <RenderCard />
        <LoadMore onClick={loadMoreHandler} />
      </Container>
    </>
  );
};

export default CatalogPage;
