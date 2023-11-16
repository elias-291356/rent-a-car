import styled from 'styled-components';
// import sprite from '../../images/sprite.svg';

export const ModalBackdrop = styled.div`


    position: fixed;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    padding-top: 150px;
    background-color: rgba(18, 20, 23, 0.50);
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
  
`
export const ItemWrap = styled.div`
display:flex;
justify-content: center;
background-color: white;
border-radius: 24px;
padding-top:15px;
padding-bottom:40px;
padding-left: 35px;
padding-right: 37px;
width:541px;

`
export const ItemModal = styled.div`
width:469px;
`
export const ImageModal = styled.img`
width:100%;
  height:270px;
  border-radius: 24px;
  padding-bottom: 20px;
`
export const ButtonModal = styled.div`
 width:20px;
 height: 20px;
margin-left: 100%;

`
export const ButtonModalSend = styled.div`
margin-top: 20px;
padding: 12px 50px;
  width: 170px;
  border-radius: 12px;
  background-color: #3470ff;
  border: none;
  color: white;

`
export const AdvantagesCar = styled.div`
display:flex;
margin-top: 20px;
margin-bottom: 20px;
color: #121417;
font-family: Manrope,sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.4;

`
export const FunctionalitiesParagraph = styled.p`
color: #121417;

font-family: Manrope,sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 1.4; /* 142.857% */

`
export const Functionalities = styled.div`

display: flex;
flex-direction: column;
color: #121417;
font-family: Manrope,sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 1.3; 
row-gap: 6px;
`
export const AccessoriesMainWrap = styled.div`
display: flex;
flex-direction: column;


`
export const AccessoriesTop = styled.div`
display: flex;

`
export const FunctionalitiesBottom = styled.div`

display: flex;
`
export const RentalConditions = styled.div`
row-gap: 8px;
display: flex;
flex-direction:column;
`
export const AgeAndLicense = styled.div`
display: flex;
column-gap: 8px;
color: #363535;

font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 150% */
`
export const Requires = styled.div`
display: flex;
column-gap: 8px;
color: #363535;

font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 150% */

`