import React, { useState } from "react";
import Select from "react-select";
import {
  BtnFilter,
  BtnFilterWrap,
  ContainerFilter,
  Form,
  FormGroup,
  Input,
  Label,
  WrapInputes,
} from "../Filter/Filter.styled";
import { useDispatch } from "react-redux";

import { useForm, Controller } from "react-hook-form";

import {
  setFilteredFavoriteCars,
  setIsSubmittedFaforiteForm,
} from "../../redux/carSlice";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
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
  singleValue: (provided, state) => ({
    ...provided,
    // color: state.isSelected ? "#171612" : "#121417",
    color: "#171612",
    fontFamily: "Manrope",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "#ffffff",
    color: "rgba(18, 20, 23, 0.20)",
    // color: isSelected ? "#000000" : "#1165e2",
  }),
};

const FavoritesFilter = () => {
  const { register, handleSubmit, control } = useForm();
  const [sortedCarsData, setSortedCarsData] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();

  const favoriteCars = JSON.parse(localStorage.getItem("favoriteCars")) || [];

  const options = Array.isArray(favoriteCars)
    ? favoriteCars.map((carBrand) => ({
        label: carBrand.make,
        value: carBrand.make,
      }))
    : [];

  const uniqueOptions = options.filter((option, index, array) => {
    return (
      array.findIndex((element) => element.label === option.label) === index
    );
  });
  const priceOptions = [];
  for (let i = 30; i <= 500; i += 10) {
    priceOptions.push({ value: i, label: `$${i}` });
  }
  const onSubmit = (data) => {
    const sortedCars = favoriteCars
      .filter((car) => {
        return (
          (!data.make || car.make === data.make.label) &&
          (!data.price || car.price <= data.price.value) &&
          (!data.mileageFrom || car.mileage >= parseInt(data.mileageFrom)) &&
          (!data.mileageTo || car.mileage <= parseInt(data.mileageTo))
        );
      })
      .sort((a, b) => {
        if (a.make !== b.make) {
          return a.make.localeCompare(b.make);
        } else {
          return a.price - b.price;
        }
      });
    setIsSubmit(true);

    setSortedCarsData(sortedCars);
  };
  dispatch(setIsSubmittedFaforiteForm(isSubmit));
  dispatch(setFilteredFavoriteCars(sortedCarsData));

  return (
    <ContainerFilter>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Car brand</Label>
          <Controller
            name="make"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                styles={customStyles}
                placeholder="Enter the text"
                options={uniqueOptions}
              />
            )}
          />
        </FormGroup>

        <FormGroup>
          <Label>Price/1 hour</Label>
          <Controller
            name="price"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                styles={customStyles}
                placeholder="To $"
                options={priceOptions}
              />
            )}
          />
        </FormGroup>

        <FormGroup>
          <Label>Car mileage/km</Label>
          <WrapInputes>
            <Input
              type="number"
              placeholder="From"
              {...register("mileageFrom")}
            />
            <Input type="number" placeholder="To" {...register("mileageTo")} />
          </WrapInputes>
        </FormGroup>

        <BtnFilterWrap>
          <BtnFilter type="submit" onClick={onSubmit}>
            Search
          </BtnFilter>
        </BtnFilterWrap>
      </Form>
    </ContainerFilter>
  );
};

export default FavoritesFilter;
