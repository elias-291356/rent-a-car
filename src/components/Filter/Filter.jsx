import React from "react";
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
import { useSelector } from "react-redux";
import { selectAllCarsItem } from "../../redux/carSelector";

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
  const carBrandOptions = useSelector(selectAllCarsItem);
  const options = carBrandOptions.map((brand) => ({
    label: brand,
  }));

  const onCarBrandLabel = (brand) => {
    console.log("Selected Car Brand Label:", brand.label);
  };
  return (
    <ContainerFilter>
      {/* <form> */}
      <Form>
        <SelectCarBrand>
          <FormGroup>
            <Label>Car brand</Label>
            <Select
              styles={customStyles}
              placeholder="Enter the text"
              options={options}
              onChange={onCarBrandLabel}
            />
          </FormGroup>
        </SelectCarBrand>
        <SelectPrice>
          <FormGroup>
            <Label>Price/1 hour</Label>
            <Select styles={customStyles} placeholder="To $" />
          </FormGroup>
        </SelectPrice>
        <InputWrapFirst>
          <Label>Сar mileage/km</Label>
          <InputWrapSecond>
            {/* <FormGroup> */}

            <Input placeholder="From" options={options} />
            <Input placeholder="To" options={options} />
            {/* </FormGroup> */}
          </InputWrapSecond>
        </InputWrapFirst>
        <BtnFilterWrap>
          <BtnFilter>Search</BtnFilter>
        </BtnFilterWrap>
      </Form>
      {/* </form> */}
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
