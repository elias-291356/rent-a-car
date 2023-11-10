import styled from 'styled-components';
export const ContainerFilter = styled.div`
  display:flex;
  justify-content:center;
  padding-bottom:50px;
  padding-top: 50px;
  background-color: rgba(139, 165, 162, 0.49);
`
export const Form = styled.form`
  display:flex;
  justify-content:space-between;
  width:860px;
`
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`
export const SelectCarBrand = styled.div`
 width:224px;
`
export const SelectPrice = styled.div`
 width:125px;
`
export const Input = styled.input`
width:160px;
padding: 14px 93px 14px 24px;
height:64px;
font-family: Manrope;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 1.13; 
border-radius: 14px;
background: #F7F7FB;
border: none;


;
`
export const InputWrapFirst = styled.div`
display:flex;
flex-direction: column;
row-gap:8px;
`
export const InputWrapSecond = styled.div`
display:flex;
justify-content:space-between;
column-gap: 3px;
color: #121417;

`



export const Label = styled.label`
  /* margin-bottom: 5px;  */
`
// export const SelectStyle = styled.select`
//   color: #121417;
//   color:red;

// font-family: Manrope;
// font-size: 18px;
// font-style: normal;
// font-weight: 500;
// line-height: 20px; /* 111.111% */
// `
export const BtnFilter = styled.button`
  height:50px;
  width:135px;
  place-self: flex-end;
  border-radius: 12px;
  padding:0;
background: #3470FF;
border:none;
color:white;

`
export const BtnFilterWrap = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
margin-top: 25px;

`