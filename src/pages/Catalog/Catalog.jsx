import React, { useState } from "react";
import Filter from "../../components/Filter/Filter";
import LoadMore from "../../components/LoadMore/LoadMore";
import RenderCard from "../../components/RenderCard/RenderCard";
import { Loader } from "../../components/Loader/Loader";
import { Container } from "../../components/RenderCard/RenderCard.styled";
import {
  selectCurrentPage,
  selectLoader,
  selectSubmitForm,
} from "../../redux/carSelector";
import { fetchCarsThunks } from "../../redux/thunks";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setSubmitted } from "../../redux/carSlice";
const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoader);
  const currentPage = useSelector(selectCurrentPage);
  const isSubmitted = useSelector(selectSubmitForm);
  const [filteredCars, setFilteredCars] = useState(null);
  const loadMoreHandler = () => {
    dispatch(fetchCarsThunks(currentPage));
  };
  const handleFilterSubmit = (filteredData) => {
    // Здесь можете использовать отфильтрованные данные
    setFilteredCars(filteredData);
  };
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Container>
        <Filter onSubmit={handleFilterSubmit} />
        <ToastContainer />
        {/* Передайте отфильтрованные машины в компонент RenderCard */}
        <RenderCard cars={filteredCars} />
        <LoadMore onClick={loadMoreHandler} />
      </Container>
    </>
  );
};

export default CatalogPage;
