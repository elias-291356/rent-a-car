import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectLoader } from "../../redux/carSelector";
import { Loader } from "../Loader/Loader";

import {
  FavoriteBcg,
  FavoriteBtn,
  WrapFavoriteComponents,
} from "./EmptyFavorite.styled";

const EmptyFavorite = () => {
  // const navigate = useNavigate();
  const isLoading = useSelector(selectLoader);
  // const onClickBtn = () => {
  //   navigate("/catalog"); // Переход на страницу каталога
  // };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <WrapFavoriteComponents>
        <FavoriteBcg>
          <h1>
            There are currently no items saved in your favorites. Explore our
            catalog page and start adding items to your favorites!
          </h1>
        </FavoriteBcg>
        <FavoriteBtn>
          {/* <button onClick={onClickBtn}>Back to catalog</button> */}
          <NavLink to="/catalog"> Catalog</NavLink>
        </FavoriteBtn>
      </WrapFavoriteComponents>
    </>
  );
};

export default EmptyFavorite;
