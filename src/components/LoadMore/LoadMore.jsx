import React from "react";

import { LoadMoreBtn } from "./LoadMore.Styled";

const LoadMore = () => {
  return (
    <>
      <LoadMoreBtn>Load more</LoadMoreBtn>
    </>
  );
};

export default LoadMore;
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Pagination from "../Pagination/Pagination";
// import { LoadMoreBtn } from "./LoadMore.Styled";

// const LoadMore = () => {
//   const BASE_URL = "https://654baa7e5b38a59f28ef7bae.mockapi.io";
//   const instance = axios.create({ baseURL: BASE_URL });
//   const [pagination, setPagination] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage, setPostsPerPage] = useState(12);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data } = await instance.get("/adverts/car");
//         console.log(data);
//         setPagination(data);
//       } catch (error) {
//         console.error("Ошибка при получении данных:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const indexOfLastPage = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPage - postsPerPage;
//   const currentPosts = pagination.slice(indexOfFirstPost, indexOfLastPage);

//   return (
//     <>
//       <LoadMoreBtn pagination={currentPosts}>Load more</LoadMoreBtn>
//       <Pagination
//         totalPosts={pagination.length}
//         postsPerPage={postsPerPage}
//         setCurrentPage={setCurrentPage}
//       />
//     </>
//   );
// };

// export default LoadMore;
