import React from "react";
import styled from "styled-components";
// import Header from "./Header/Header";
import Agents from "./Agents";
import Properties from "../SamProps/Properties";
import { BsChat } from "react-icons/bs";

const HomePage = () => {
  return (
    <Container>
      <Wrapper>
        <Button>
          <BsChat />
        </Button>
        <Properties />
        <Agents />
      </Wrapper>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div``;

const Button = styled.div`
  background: #000d6b;

  border-radius: 50%;
  width: fit-content;
  padding: 20px;
  font-size: 25px;
  color: white;
  font-weight: bold;
  position: fixed;
  bottom: 40px;
  right: 30px;
  z-index: 1;
  cursor: pointer;
`;
// background: #4e66f9;
// color: white;
// position: fixed;
// right: 20px;
// width: 50px;
// height: 50px;
// font-size: 40px;
// padding-left: 10px;
// padding-top: 5px;

// :hover {
//   cursor: pointer;
// }
