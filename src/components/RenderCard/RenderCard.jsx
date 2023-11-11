import React from "react";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/carSelector";
import {
  Image,
  Items,
  Item,
  Button,
  DescrRentCarTop,
} from "../../components/RenderCard/RenderCard.styled";
const RenderCard = () => {
  const carsItems = useSelector(selectCars);

  return (
    <div>
      <Items className="list">
        {carsItems.map((car) => {
          return (
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
              <Button>Learn more</Button>
            </Item>
          );
        })}
      </Items>
    </div>
  );
};

export default RenderCard;
