import React from "react";
import {
  Button,
  DescrRentCarTop,
  Item,
  Items,
  Image,
} from "../RenderCard/RenderCard.styled";

const Modal = ({ selectedCar }) => {
  return (
    <div>
      <Items>
        {selectedCar &&
          selectedCar.map((car) => (
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
              <Button>Узнать больше</Button>
            </Item>
          ))}
      </Items>
    </div>
  );
};

export default Modal;
