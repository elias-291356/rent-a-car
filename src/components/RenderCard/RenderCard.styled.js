import styled from "styled-components";
export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 1183px;
  padding-bottom: 150px;
`;
export const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  gap: 27px 27px;
  text-decoration: none;
`;
export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 275px;
  row-gap: 14px;
  
`;
export const Image = styled.img`
  width: 275px;
  height: 270px;
  border-radius: 15px;
`;
export const Button = styled.button`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 12px;
  background-color: #3470ff;
  border: none;
  color: white;
`;
export const WrapDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 4px;
`;
export const TitleDescrCar = styled.div`
  display: flex;
  justify-content: space-between;

`;
export const SubTitleDescrCar = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Manrope,sans-serif;
  font-style: normal;
  font-size: 12px;
  column-gap: 12px;
  font-weight: 400;
  line-height: 1.5; 
  color: rgba(18, 20, 23, 0.5);
`;


export const Favorite = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;

  svg {
    ${({ isFavorite }) =>
    isFavorite &&
    `
      fill: blue;
    `}
  }
`;
