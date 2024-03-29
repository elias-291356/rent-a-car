import React from "react";
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
} from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/carSelector";
import { fetchAllCarsThunks } from "../../redux/thunks";
import { useForm, Controller } from "react-hook-form";

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

const Filter = () => {
  const { register, handleSubmit, control } = useForm();
  const autoListData = useSelector(selectCars);

  const dispatch = useDispatch();
  const options = autoListData.map((carBrand) => ({
    label: carBrand.make,
    value: carBrand.make,
  }));

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
    dispatch(fetchAllCarsThunks(data));
  };

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
          <BtnFilter type="submit">Search</BtnFilter>
        </BtnFilterWrap>
      </Form>
    </ContainerFilter>
  );
};

export default Filter;
