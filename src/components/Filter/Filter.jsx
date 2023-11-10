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
// import { SelectStyle } from "./Filter.styled";
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  // Другие ваши варианты
];
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    // border: state.isFocused ? "2px solid #121417" : "2px solid #ddd", // Пример стиля для рамки при фокусе
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
    backgroundColor: state.isSelected ? "#121417" : "white",
    color: state.isSelected ? "white" : "#121417",
  }),

  // Другие кастомные стили по необходимости
};
const Filter = () => {
  return (
    <ContainerFilter>
      <form>
        <Form>
          <SelectCarBrand>
            <FormGroup>
              <Label>Car brand</Label>
              <Select
                styles={customStyles}
                placeholder="Enter the text"
                options={options}
              />
            </FormGroup>
          </SelectCarBrand>
          <SelectPrice>
            <FormGroup>
              <Label>Price/1 hour</Label>
              <Select
                styles={customStyles}
                placeholder="To $"
                options={options}
              />
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
      </form>
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
