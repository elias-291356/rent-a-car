import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectfilteredCars,
  selectIsOpenModal,
  selectSubmitForm,
} from "../../redux/carSelector";
import {
  Image,
  Items,
  Item,
  Button,
  DescrRentCarTop,
  Favorite,
} from "../../components/RenderCard/RenderCard.styled";
import { setIsOpenModal } from "../../redux/carSlice";
import Modal from "../Modal/Modal";
import { ModalBackdrop } from "../Modal/Modal.styled";
import { setFavoriteCars } from "../../redux/carSlice";
// import sprite from "../../sprite.svg";

const RenderCard = () => {
  const [selectedCarItemsModal, setSelectedCarItemsModal] = useState(null);
  const [selectedCarModal, setSelectedCarModal] = useState(null);
  const filteredCars = useSelector(selectfilteredCars);
  const isOpenModal = useSelector(selectIsOpenModal);
  const isSubmit = useSelector(selectSubmitForm);
  const dispatch = useDispatch();
  const carsItems = useSelector(selectCars);

  const openModalFilteredModal = (id) => {
    const car = filteredCars.filter((car) => car.id === id);
    setSelectedCarModal(car);
    dispatch(setIsOpenModal(true));
  };

  const openModalcarsItems = (id) => {
    const car = carsItems.filter((car) => car.id === id);
    setSelectedCarItemsModal(car);
    dispatch(setIsOpenModal(true));
  };

  const onSelectFavorite = (id) => {
    const car = carsItems.filter((car) => car.id === id);
    const favoriteCars = JSON.parse(localStorage.getItem("favoriteCars")) || [];
    const updatedFavoriteCars = [...favoriteCars, ...car];
    localStorage.setItem("favoriteCars", JSON.stringify(updatedFavoriteCars));
    dispatch(setFavoriteCars(updatedFavoriteCars));
  };
  return (
    <div>
      <Items className="list">
        {isSubmit
          ? filteredCars.map((car) => (
              <Item key={car.id}>
                <Favorite onClick={() => onSelectFavorite(car.id)}>
                  {/* <svg>
                    <use xlinkHref={`${sprite}#favorite`} />
                  </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M15.63 3.45753C15.2469 3.07428 14.7921 2.77026 14.2915 2.56284C13.7909 2.35542 13.2543 2.24866 12.7125 2.24866C12.1706 2.24866 11.634 2.35542 11.1334 2.56284C10.6329 2.77026 10.178 3.07428 9.79497 3.45753L8.99997 4.25253L8.20497 3.45753C7.4312 2.68376 6.38174 2.24906 5.28747 2.24906C4.19319 2.24906 3.14374 2.68376 2.36997 3.45753C1.5962 4.2313 1.1615 5.28075 1.1615 6.37503C1.1615 7.4693 1.5962 8.51876 2.36997 9.29253L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.29253C16.0132 8.90946 16.3172 8.45464 16.5247 7.95404C16.7321 7.45345 16.8388 6.91689 16.8388 6.37503C16.8388 5.83316 16.7321 5.2966 16.5247 4.79601C16.3172 4.29542 16.0132 3.84059 15.63 3.45753Z"
                      stroke="white"
                      stroke-opacity="0.8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
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
                <Button onClick={() => openModalFilteredModal(car.id)}>
                  Learn more
                </Button>
              </Item>
            ))
          : carsItems.map((car) => (
              <Item key={car.id}>
                <Favorite onClick={() => onSelectFavorite(car.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M15.63 3.45753C15.2469 3.07428 14.7921 2.77026 14.2915 2.56284C13.7909 2.35542 13.2543 2.24866 12.7125 2.24866C12.1706 2.24866 11.634 2.35542 11.1334 2.56284C10.6329 2.77026 10.178 3.07428 9.79497 3.45753L8.99997 4.25253L8.20497 3.45753C7.4312 2.68376 6.38174 2.24906 5.28747 2.24906C4.19319 2.24906 3.14374 2.68376 2.36997 3.45753C1.5962 4.2313 1.1615 5.28075 1.1615 6.37503C1.1615 7.4693 1.5962 8.51876 2.36997 9.29253L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.29253C16.0132 8.90946 16.3172 8.45464 16.5247 7.95404C16.7321 7.45345 16.8388 6.91689 16.8388 6.37503C16.8388 5.83316 16.7321 5.2966 16.5247 4.79601C16.3172 4.29542 16.0132 3.84059 15.63 3.45753Z"
                      stroke="white"
                      stroke-opacity="0.8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
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
                <Button onClick={() => openModalcarsItems(car.id)}>
                  Learn more
                </Button>
              </Item>
            ))}
      </Items>
      {isOpenModal ? (
        <ModalBackdrop>
          <Modal selectedCar={selectedCarModal || selectedCarItemsModal} />
        </ModalBackdrop>
      ) : null}
    </div>
  );
};

export default RenderCard;
