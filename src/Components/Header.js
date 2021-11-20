import React, { useState } from "react";
import styled from "styled-components";
// import BuyItems from "./BuyItems";
import logo from "../Image/log.jpg.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);

  const onHandle = () => {
    setDropDown(!dropDown);
  };
  return (
    <Container>
      <Top>
        <Logo src={logo} />
        <Navigation
          onClick={() => {
            console.log(dropDown);
            onHandle();
          }}
        >
          <Nav >Buy</Nav>
          <Nav>Sell</Nav>
          <Nav>Rent</Nav>
          <Nav>Mortgage</Nav>
          <Nav>Agent</Nav>
          <Nav>
            Sign in / <span>Join</span>
          </Nav>
        </Navigation>
      </Top>
      <Wrapper>
        <Content>
          <Text>No 1 Remote Property Search Engine</Text>

          <Home>
            <Div>Search Homes</Div>
            <Div>Price My Home</Div>
          </Home>
        </Content>

        <Input placeholder="City, ZIP, School, Address, Neighborhood" />
        <Desc>Expert guidance for your home journey</Desc>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Home = styled.div`
  width: 600px;
  color: white;
  text-align: center;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  font-weight: 600;
  margin-bottom: 30px;
  letter-spacing: 1px;

  :hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 50%;
  height: 60px;
  border-radius: 50px;
  background-color: white;
  padding-left: 20px;
  display: flex;
  align-items: center;
  border: 1px solid gray;
  font-size: 23px;
  color: lightgray;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Desc = styled.div`
  font-size: 22px;
  letter-spacing: 1px;
  color: white;
  font-weight: 600;
  margin: 5px;
`;

const Div = styled.div`
font-size:25px;
line-height32px;
`;

const Content = styled.div`
  width: 650px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Text = styled.div`
  font-size: 55px;
  line-height: 62px;
  color: white;
`;

const Nav = styled.div`
  font-size: 22px;
  color: white;
  font-weight: 600;
  margin: 0 35px;
  font-family: MovotoDMSans, Calibri, Arial, sans-serif;
  letter-spacing: 1px;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 15px;

  :hover {
    cursor: pointer;
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 480px;
  background-color: rgb(126,151,201);
  background-image: "url('tinaheader.jpg')";
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;