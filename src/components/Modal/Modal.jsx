import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setIsOpenModal } from "../../redux/carSlice";
import { Button, DescrRentCarTop } from "../RenderCard/RenderCard.styled";
import { ItemModal, ItemWrap, ImageModal, ButtonModal } from "./Modal.styled";
// import sprite from "../../images/sprite.svg";
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

    // Add event listener when the component mounts
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    // Remove event listener when the component unmounts
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
              <ButtonModal
                type="button"
                onClick={onBtnCloseModal}
              ></ButtonModal>
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
