import React from "react";

import { LoadMoreBtn } from "./LoadMore.Styled";

const LoadMore = ({ onClick }) => {
  return (
    <>
      <LoadMoreBtn onClick={onClick}>Load more</LoadMoreBtn>
    </>
  );
};

export default LoadMore;
