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
  Favorite,
  TitleDescrCar,
  SubTitleDescrCar,
  WrapDescription,
} from "../../components/RenderCard/RenderCard.styled";
import { setIsOpenModal } from "../../redux/carSlice";
import Modal from "../Modal/Modal";
import { ModalBackdrop } from "../Modal/Modal.styled";
import { setFavoriteCars } from "../../redux/carSlice";
import { toast } from "react-toastify";

const RenderCard = () => {
  const [selectedCarItemsModal, setSelectedCarItemsModal] = useState(null);
  const [selectedCarModal, setSelectedCarModal] = useState(null);

  // const [idCar, setIdCar] = useState([]);
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
    // setIsFavorite(true);
    toast.success("Added to favorites");
  };

  return (
    <div>
      <Items className="list">
        {isSubmit
          ? filteredCars.map((car) => (
              <Item key={car.id}>
                <Favorite
                  onClick={() => onSelectFavorite(car.id)}
                  // isFavorite={isFavorite}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M15.63 3.45753C15.2469 3.07428 14.7921 2.77026 14.2915 2.56284C13.7909 2.35542 13.2544 2.24866 12.7125 2.24866C12.1706 2.24866 11.6341 2.35542 11.1335 2.56284C10.6329 2.77026 10.1781 3.07428 9.795 3.45753L9 4.25253L8.205 3.45753C7.43123 2.68376 6.38177 2.24906 5.2875 2.24906C4.19322 2.24906 3.14377 2.68376 2.37 3.45753C1.59623 4.2313 1.16153 5.28075 1.16153 6.37503C1.16153 7.4693 1.59623 8.51876 2.37 9.29253L3.165 10.0875L9 15.9225L14.835 10.0875L15.63 9.29253C16.0132 8.90946 16.3173 8.45464 16.5247 7.95404C16.7321 7.45345 16.8389 6.91689 16.8389 6.37503C16.8389 5.83316 16.7321 5.2966 16.5247 4.79601C16.3173 4.29542 16.0132 3.84059 15.63 3.45753Z"
                      stroke="white"
                      strokeOpacity="0.8"
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
                <WrapDescription>
                  <SubTitleDescrCar>
                    <p>{car.address.split(", ").slice(-2, -1)}</p>
                    <p>{car.address.split(", ").pop()}</p>
                    <p>{car.rentalCompany}</p>
                  </SubTitleDescrCar>
                  <SubTitleDescrCar>
                    <p>{car.type.split(" ")[0]}</p>
                    <p>{car.model.split(" ")[0]}</p>
                    <p>{car.mileage}</p>
                    <p>{car.functionalities[car.functionalities.length - 2]}</p>
                  </SubTitleDescrCar>
                </WrapDescription>
                <Button onClick={() => openModalFilteredModal(car.id)}>
                  Learn more
                </Button>
              </Item>
            ))
          : carsItems.map((car) => (
              <Item key={car.id}>
                <Favorite
                  onClick={() => onSelectFavorite(car.id)}
                  // isFavorite={isFavorite}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M15.63 3.45753C15.2469 3.07428 14.7921 2.77026 14.2915 2.56284C13.7909 2.35542 13.2544 2.24866 12.7125 2.24866C12.1706 2.24866 11.6341 2.35542 11.1335 2.56284C10.6329 2.77026 10.1781 3.07428 9.795 3.45753L9 4.25253L8.205 3.45753C7.43123 2.68376 6.38177 2.24906 5.2875 2.24906C4.19322 2.24906 3.14377 2.68376 2.37 3.45753C1.59623 4.2313 1.16153 5.28075 1.16153 6.37503C1.16153 7.4693 1.59623 8.51876 2.37 9.29253L3.165 10.0875L9 15.9225L14.835 10.0875L15.63 9.29253C16.0132 8.90946 16.3173 8.45464 16.5247 7.95404C16.7321 7.45345 16.8389 6.91689 16.8389 6.37503C16.8389 5.83316 16.7321 5.2966 16.5247 4.79601C16.3173 4.29542 16.0132 3.84059 15.63 3.45753Z"
                      stroke="white"
                      strokeOpacity="0.8"
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
                <WrapDescription>
                  <SubTitleDescrCar>
                    <p>{car.address.split(", ").slice(-2, -1)}</p>
                    <p>{car.address.split(", ").pop()}</p>
                    <p>{car.rentalCompany}</p>
                  </SubTitleDescrCar>
                  <SubTitleDescrCar>
                    <p>{car.type.split(" ")[0]}</p>
                    <p>{car.model.split(" ")[0]}</p>
                    <p>{car.mileage}</p>
                    <p>{car.functionalities[car.functionalities.length - 2]}</p>
                  </SubTitleDescrCar>
                </WrapDescription>

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
