import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/carSelector";
import { setFavoriteCars } from "../../redux/carSlice";
import Modal from "../Modal/Modal";
import { ModalBackdrop } from "../Modal/Modal.styled";
import RenderCard from "../RenderCard/RenderCard";
import {
  Button,
  DescrRentCarTop,
  Image,
  Item,
  Favorite,
  Items,
} from "../RenderCard/RenderCard.styled";

const FavoritesCars = () => {
  const localStorageFavorite = useSelector(selectFavoriteCars);

  return (
    <div>
      <Items>
        {localStorageFavorite.map((car) => (
          <Item key={car.id}>
            <Favorite>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                {/* Ваш SVG-код */}
              </svg>
            </Favorite>
            <Image src={car.img} alt="car" />
            <DescrRentCarTop>
              <p>
                {car.make}, {car.year}
              </p>
              <p>{car.rentalPrice}</p>
            </DescrRentCarTop>
            <div>
              <p>{car.address}</p>
              <p>{car.rentalCompany}</p>
              <p>{car.type}</p>
            </div>
            <Button>Learn more</Button>
          </Item>
        ))}

        {/* {isOpenModal ? (
        <ModalBackdrop>
          <Modal selectedCar={selectedCarModal || selectedCarItemsModal} />
        </ModalBackdrop>
      ) : null} */}
      </Items>
    </div>
  );
};

export default FavoritesCars;
