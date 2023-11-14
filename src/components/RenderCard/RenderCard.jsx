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
} from "../../components/RenderCard/RenderCard.styled";
import { setIsOpenModal } from "../../redux/carSlice";
import Modal from "../Modal/Modal";

const RenderCard = () => {
  const [selectedCarItemsModal, setSelectedCarItemsModal] = useState(null);
  const [selectedCarModal, setSelectedCarModal] = useState(null);
  const filteredCars = useSelector(selectfilteredCars);
  const isOpenModal = useSelector(selectIsOpenModal);
  const isSubmit = useSelector(selectSubmitForm);
  const carsItems = useSelector(selectCars);
  const dispatch = useDispatch();

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

  return (
    <div>
      <Items className="list">
        {isSubmit
          ? filteredCars.map((car) => (
              <Item key={car.id}>
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
        <Modal selectedCar={selectedCarModal || selectedCarItemsModal} />
      ) : null}
    </div>
  );
};

export default RenderCard;
