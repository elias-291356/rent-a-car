import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import LoadMore from "../../components/LoadMore/LoadMore";
import RenderCard from "../../components/RenderCard/RenderCard";
import { Loader } from "../../components/Loader/Loader";
import { Container } from "../../components/RenderCard/RenderCard.styled";
import { selectLoader } from "../../redux/carSelector";
import { fetchCarsThunks } from "../../redux/thunks";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";
import axios from "axios";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoader);

  useEffect(() => {
    dispatch(fetchCarsThunks());
  }, [dispatch]);

  const BASE_URL = "https://654baa7e5b38a59f28ef7bae.mockapi.io";
  const instance = axios.create({ baseURL: BASE_URL });

  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await instance.get("/adverts/car");
        console.log(data);
        setCoinsData(data);
      } catch (error) {
        console.error("error:", error);
      }
    };

    fetchData();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Container>
        <Filter />
        <RenderCard coinsData={currentPosts} />
        <Pagination
          totalPosts={coinsData.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
        />
        <LoadMore />
      </Container>
    </>
  );
};

export default CatalogPage;
