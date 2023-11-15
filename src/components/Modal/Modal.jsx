import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setIsOpenModal } from "../../redux/carSlice";
import { Button, DescrRentCarTop } from "../RenderCard/RenderCard.styled";
import { ItemModal, ItemWrap, ImageModal, ButtonModal } from "./Modal.styled";
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
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#121417"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </ButtonModal>
              <ImageModal src={car.img} alt="car" />
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
              <Button type="submit">Rental car</Button>
            </ItemModal>
          ))}
      </ItemWrap>
    </div>
  );
};

export default Modal;
