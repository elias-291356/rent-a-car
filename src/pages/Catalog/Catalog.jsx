import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/carSelector";
import { fetchCars } from "../../service/api";

const CatalogPage = () => {
  const items = useSelector(selectCars);
  console.log(items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return <div>CatalogPage</div>;
};

export default CatalogPage;
