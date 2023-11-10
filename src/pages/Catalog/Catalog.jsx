import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import RenderCard from "../../components/RenderCard/RenderCard";
import { Container } from "../../components/RenderCard/RenderCard.styled";
import { selectCars } from "../../redux/carSelector";
import { fetchCars } from "../../service/api";

const CatalogPage = () => {
  const carsItems = useSelector(selectCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Filter />
        <RenderCard />
      </Container>
    </>
  );
};

export default CatalogPage;
