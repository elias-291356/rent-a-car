import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setIsOpenModal } from "../../redux/carSlice";
import {
  SubTitleDescrCar,
  TitleDescrCar,
  WrapDescription,
} from "../RenderCard/RenderCard.styled";
import {
  ItemModal,
  ItemWrap,
  ImageModal,
  ButtonModal,
  AdvantagesCar,
  Functionalities,
  FunctionalitiesParagraph,
  AccessoriesMainWrap,
  AccessoriesTop,
  FunctionalitiesBottom,
  RentalConditions,
  AgeAndLicense,
  Requires,
  ButtonModalSend,
} from "./Modal.styled";
const Modal = ({ selectedCar }) => {
  const dispatch = useDispatch();

  const onBtnCloseModal = () => {
    dispatch(setIsOpenModal(false));
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onBtnCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); //

  return (
    <div>
      <ItemWrap>
        {selectedCar &&
          selectedCar.map((car) => (
            <ItemModal key={car.id}>
              <ButtonModal type="button" onClick={onBtnCloseModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#121417"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#121417"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonModal>
              <ImageModal src={car.img} alt="car" />
              <TitleDescrCar>
                <p>
                  {car.make}, {car.model}
                </p>
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
              <AdvantagesCar>
                <p>{car.description}</p>
              </AdvantagesCar>
              <Functionalities>
                <FunctionalitiesParagraph>
                  Accessories and functionalities:
                </FunctionalitiesParagraph>
              </Functionalities>
              <AccessoriesMainWrap>
                <AccessoriesTop>
                  <p>{car.accessories[0]}</p>
                  <p>{car.accessories[1]}</p>
                  <p>{car.accessories[2]}</p>
                </AccessoriesTop>
                <FunctionalitiesBottom>
                  <p>{car.functionalities[0]}</p>
                  <p>{car.functionalities[1]}</p>
                  <p>{car.functionalities[2]}</p>
                </FunctionalitiesBottom>
              </AccessoriesMainWrap>
              <RentalConditions>
                <p>Rental Conditions: </p>
                <AgeAndLicense>
                  <p>{car.rentalConditions.split("\n")[0]}</p>
                  <p>{car.rentalConditions.split("\n")[1]}</p>
                </AgeAndLicense>
                <Requires>
                  <p>{car.rentalConditions.split("\n")[2]}</p>
                  <p>Mileage: {car.mileage}</p>
                  <p>Price: {car.rentalPrice}</p>
                </Requires>
              </RentalConditions>
              <ButtonModalSend type="submit">Rental car</ButtonModalSend>
            </ItemModal>
          ))}
      </ItemWrap>
    </div>
  );
};

export default Modal;
