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
`
export const ButtonModal = styled.div`
 width:20px;
 height: 20px;
/* border: 1px solid blue; */
margin-left: 100%;


`