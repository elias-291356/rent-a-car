import React from "react";
import { BcgWrap, Container, WrapHeadline, WrapText } from "./Home.styled";

const HomePage = () => {
  return (
    <>
      <Container>
        <WrapHeadline>
          <h1>Drive Radar</h1>
          <h2>Welcome to our car search app!</h2>
        </WrapHeadline>
        <WrapText>
          <ul className="list">
            <li>
              <p>
                We provide international search using various parameters, such
                as car make, rental cost, mileage and others characteristics.
                Our system will help you quickly find a car, according to your
                preferences.
              </p>
            </li>
            <li>
              <p>
                Save your favorite cars to your favorites list. This is
                convenient for subsequent quick access and comparison of offers.
              </p>
            </li>
          </ul>
          <BcgWrap></BcgWrap>
        </WrapText>
      </Container>
    </>
  );
};

export default HomePage;
