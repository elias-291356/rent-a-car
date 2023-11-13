import React, { useEffect, useState } from "react";
import {
  BtnFilter,
  BtnFilterWrap,
  ContainerFilter,
  FormGroup,
  InputWrapFirst,
  InputWrapSecond,
  Label,
  SelectCarBrand,
  SelectPrice,
} from "./Filter.styled";
import Select from "react-select";
import { Form } from "./Filter.styled";
import { Input } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCarsItem,
  selectCars,
  selectSubmitForm,
} from "../../redux/carSelector";
import { toast } from "react-toastify";
import { setCarBrand, setSubmitted } from "../../redux/carSlice";
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    // border: state.isFocused ? "2px solid #121417" : "2px solid #ddd",
    padding: "14px 16px 14px 18px ",
    boxShadow: "none",
    border: "none",
    borderRadius: "14px",
    backgroundColor: "#F7F7FB",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "#121417",
    fontFamily: "Manrope",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#121417",
    fontFamily: "Manrope",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "#ffffff",
    color: "#121417",
  }),
};

const Filter = () => {
  // const autoList = useSelector(selectAllCarsItem);
  const autoListData = useSelector(selectCars);
  const isSubmitted = useSelector(selectSubmitForm);
  // console.log(autoListData);
  const [selectedCarBrand, setSelectedCarBrand] = useState([]);
  console.log(selectedCarBrand);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const dispatch = useDispatch();
  // const [fromValue, setFromValue] = useState("");
  // const [toValue, setToValue] = useState("");

  const options = autoListData.map((carBrand) => ({
    label: carBrand.make,
    value: carBrand.make,
  }));

  // Проверка повторяющихся make
  const uniqueOptions = options.filter((option, index, array) => {
    return (
      array.findIndex((element) => element.label === option.label) === index
    );
  });

  const onCarBrandLabel = (brand) => {
    // setSelectedCarBrand(brand);
    // localStorage.setItem("selectedCarBrand", JSON.stringify(brand));
    const selectedCar = autoListData.filter((car) => brand.label === car.make);
    setSelectedCarBrand(selectedCar);
  };

  const priceOptions = [];
  for (let i = 30; i <= 500; i += 10) {
    priceOptions.push({ value: i, label: `$${i}` });
  }

  const onPriceSelect = (selectedOption) => {
    setSelectedPrice(selectedOption);
    localStorage.setItem("selectedPrice", JSON.stringify(selectedOption));

    const selectedOptionValue = String(selectedOption.value).replace("$", "");

    const selectedRentalPrice = autoListData.filter((car) => {
      const carRentalPrice = car.rentalPrice.replace("$", "");
      return selectedOptionValue === carRentalPrice;
    });
    if (selectedRentalPrice.length === 0) {
      toast.error("Sorry, no cars match the selected price.");

      return;
    }
    console.log(selectedRentalPrice);
  };

  const mileageFrom = (event) => {
    const fromValue = event.currentTarget.value;
    const numberValue = parseInt(fromValue, 10);
    const matchingCars = autoListData.filter(
      (car) => car.mileage >= numberValue
    );
    if (matchingCars.length > 0) {
      matchingCars.forEach((matchingCar) => {
        console.log("Matching car brand:", matchingCar.make);
      });
    } else {
      console.log("No cars with mileage greater than the specified value.");
    }
  };

  const mileageTo = (event) => {
    const toValue = event.currentTarget.value;

    const numberValue = parseInt(toValue, 10);

    const matchingCars = autoListData.filter(
      (car) => car.mileage <= numberValue
    );

    if (matchingCars.length > 0) {
      matchingCars.forEach((matchingCar) => {
        console.log("Matching car brand:", matchingCar.make);
      });
    } else {
      console.log("No cars with mileage less than the specified value.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setCarBrand(selectedCarBrand));
    dispatch(setSubmitted(true));
    // const numericFromValue = parseInt(fromValue, 10);
    // const numericToValue = parseInt(toValue, 10);

    // const matchingCars = autoListData.filter(
    //   (car) => car.mileage >= numericFromValue && car.mileage <= numericToValue
    // );

    // if (matchingCars.length > 0) {
    //   matchingCars.forEach((matchingCar) => {
    //     console.log("Совпадающая марка машины:", matchingCar.make);
    //   });
    // } else {
    //   console.log("Машин с указанным диапазоном пробега не найдено.");
    // }
  };
  useEffect(() => {
    // const savedCarBrand = localStorage.getItem("selectedCarBrand");
    // const savedPrice = localStorage.getItem("selectedPrice");
    // if (savedCarBrand) {
    //   setSelectedCarBrand(JSON.parse(savedCarBrand));
    // }
    // if (savedPrice) {
    //   setSelectedPrice(JSON.parse(savedPrice));
    // }
  }, []);

  return (
    <ContainerFilter>
      <Form onSubmit={handleSubmit}>
        <SelectCarBrand>
          <FormGroup>
            <Label>Car brand</Label>
            <Select
              styles={customStyles}
              placeholder="Enter the text"
              options={uniqueOptions}
              value={selectedCarBrand}
              onChange={onCarBrandLabel}
            />
          </FormGroup>
        </SelectCarBrand>
        <SelectPrice>
          <FormGroup>
            <Label>Price/1 hour</Label>
            <Select
              styles={customStyles}
              placeholder="To $"
              options={priceOptions}
              value={selectedPrice}
              onChange={onPriceSelect}
            />
          </FormGroup>
        </SelectPrice>
        <InputWrapFirst>
          <Label>Сar mileage/km</Label>
          <InputWrapSecond>
            {/* <FormGroup> */}

            <Input
              placeholder="From"
              options={options}
              maxLength="7"
              onChange={mileageFrom}
            />
            <Input
              placeholder="To"
              options={options}
              maxLength="7"
              onChange={mileageTo}
            />
            {/* </FormGroup> */}
          </InputWrapSecond>
        </InputWrapFirst>
        <BtnFilterWrap>
          <BtnFilter>Search</BtnFilter>
        </BtnFilterWrap>
      </Form>
    </ContainerFilter>
  );
};

export default Filter;
// <FormGroup>
//           <Label>Сar mileage/km</Label>
//           <Select
//             styles={customStyles}
//             placeholder="From"
//             options={options}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label>Another label</Label>
//           <Select styles={customStyles} placeholder="To" options={options} />
//         </FormGroup>
