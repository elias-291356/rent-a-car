import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  selectFavoriteCars,
  selectFilteredFavoriteCars,
  selectIsOpenModal,
  selectIsSubmittedFaforiteForm,
} from "../../redux/carSelector";
import { setFavoriteCars, setIsOpenModal } from "../../redux/carSlice";
import EmptyFavorite from "../EmptyFavorite/EmptyFavorite";
import Modal from "../Modal/Modal";
import { ModalBackdrop } from "../Modal/Modal.styled";

import {
  Button,
  TitleDescrCar,
  Image,
  Item,
  Favorite,
  Items,
  SubTitleDescrCar,
} from "../RenderCard/RenderCard.styled";

const FavoritesCars = () => {
  const [selectedCarItemsModal, setSelectedCarItemsModal] = useState(null);
  const [selectedCarModal, setSelectedCarModal] = useState(null);
  const localStorageFavorite = useSelector(selectFavoriteCars);
  const filteredFavoriteCars = useSelector(selectFilteredFavoriteCars);
  const isOpenModal = useSelector(selectIsOpenModal);
  const isSubmitForm = useSelector(selectIsSubmittedFaforiteForm);
  const dispatch = useDispatch();

  const openModalFilteredModal = (id) => {
    const car = localStorageFavorite.filter((car) => car.id === id);
    setSelectedCarModal(car);
    dispatch(setIsOpenModal(true));
  };

  const openModalcarsItems = (id) => {
    const car = localStorageFavorite.filter((car) => car.id === id);
    setSelectedCarItemsModal(car);
    dispatch(setIsOpenModal(true));
  };

  const onRemoveFavorite = (id) => {
    const favoriteCars = JSON.parse(localStorage.getItem("favoriteCars")) || [];
    const indexToRemove = favoriteCars.findIndex((car) => car.id === id);
    if (indexToRemove !== -1) {
      favoriteCars.splice(indexToRemove, 1);
      localStorage.setItem("favoriteCars", JSON.stringify(favoriteCars));
      dispatch(setFavoriteCars(favoriteCars));
    }
    toast.error("Remove from favorite ");
  };

  return (
    <div>
      {localStorageFavorite.length === 0 ? (
        <EmptyFavorite />
      ) : (
        <Items className="list">
          {isSubmitForm
            ? filteredFavoriteCars.map((car) => (
                <Item key={car.id}>
                  <Favorite onClick={() => onRemoveFavorite(car.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M15.63 3.45753C15.2469 3.07428 14.7921 2.77026 14.2915 2.56284C13.7909 2.35542 13.2544 2.24866 12.7125 2.24866C12.1706 2.24866 11.6341 2.35542 11.1335 2.56284C10.6329 2.77026 10.1781 3.07428 9.795 3.45753L9 4.25253L8.205 3.45753C7.43123 2.68376 6.38177 2.24906 5.2875 2.24906C4.19322 2.24906 3.14377 2.68376 2.37 3.45753C1.59623 4.2313 1.16153 5.28075 1.16153 6.37503C1.16153 7.4693 1.59623 8.51876 2.37 9.29253L3.165 10.0875L9 15.9225L14.835 10.0875L15.63 9.29253C16.0132 8.90946 16.3173 8.45464 16.5247 7.95404C16.7321 7.45345 16.8389 6.91689 16.8389 6.37503C16.8389 5.83316 16.7321 5.2966 16.5247 4.79601C16.3173 4.29542 16.0132 3.84059 15.63 3.45753Z"
                        fill="#3470FF"
                        stroke="#3470FF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Favorite>
                  <Image src={car.img} alt="car" />

                  <TitleDescrCar>
                    <p>
                      {car.make}, {car.year}
                    </p>
                    <p>{car.rentalPrice}</p>
                  </TitleDescrCar>
                  <SubTitleDescrCar>
                    <p>{car.address}</p>
                    <p>{car.rentalCompany}</p>
                    <p>{car.type}</p>
                  </SubTitleDescrCar>
                  <Button onClick={() => openModalFilteredModal(car.id)}>
                    Learn more
                  </Button>
                </Item>
              ))
            : localStorageFavorite.map((car) => (
                <Item key={car.id}>
                  <Favorite onClick={() => onRemoveFavorite(car.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M15.63 3.45753C15.2469 3.07428 14.7921 2.77026 14.2915 2.56284C13.7909 2.35542 13.2544 2.24866 12.7125 2.24866C12.1706 2.24866 11.6341 2.35542 11.1335 2.56284C10.6329 2.77026 10.1781 3.07428 9.795 3.45753L9 4.25253L8.205 3.45753C7.43123 2.68376 6.38177 2.24906 5.2875 2.24906C4.19322 2.24906 3.14377 2.68376 2.37 3.45753C1.59623 4.2313 1.16153 5.28075 1.16153 6.37503C1.16153 7.4693 1.59623 8.51876 2.37 9.29253L3.165 10.0875L9 15.9225L14.835 10.0875L15.63 9.29253C16.0132 8.90946 16.3173 8.45464 16.5247 7.95404C16.7321 7.45345 16.8389 6.91689 16.8389 6.37503C16.8389 5.83316 16.7321 5.2966 16.5247 4.79601C16.3173 4.29542 16.0132 3.84059 15.63 3.45753Z"
                        fill="#3470FF"
                        stroke="#3470FF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Favorite>
                  <Image src={car.img} alt="car" />
                  <TitleDescrCar>
                    <p>
                      {car.make}, {car.year}
                    </p>
                    <p>{car.rentalPrice}</p>
                  </TitleDescrCar>
                  <div>
                    <p>{car.address}</p>
                    <p>{car.rentalCompany}</p>
                    <p>{car.type}</p>
                  </div>
                  <Button onClick={() => openModalcarsItems(car.id)}>
                    Learn more
                  </Button>
                </Item>
              ))}
        </Items>
      )}{" "}
      {isOpenModal ? (
        <ModalBackdrop>
          <Modal selectedCar={selectedCarModal || selectedCarItemsModal} />
        </ModalBackdrop>
      ) : null}
    </div>
  );
};

export default FavoritesCars;
