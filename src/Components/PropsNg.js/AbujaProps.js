import React from "react";
// import SamSaiHomePage from "../../Components/";
import styled from "styled-components";
import Property2 from "../SamHomePage/SamProperty2";



const PropsNg = () => {
  return (
    <div>
    <TitleHolder>
      <Title></Title>
      <SubTitle>
      
      </SubTitle>
    </TitleHolder>
    {/* <TaibatHomePage /> */}
    <TitleHolder style={{ marginTop: "50px" }}>
      <Title>MOST RECENT REAL ESTATE LISTINGS</Title>
      <SubTitleClose>
      Recently <span>Viewed</span>
      </SubTitleClose>
    </TitleHolder>
    <Property2 />
  </div>
  );
};

export default  PropsNg ;

const TitleHolder = styled.div`
  text-align: center;
`;

const Title = styled.div`
  font-size: 11px;
`;

const SubTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 1px;

  span {
    color: blue;

    :hover {
      cursor: pointer;
      color: black;
    }
  }
`;
const SubTitleClose = styled.div`
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 1px;

  span {
    color: blue;
    transition: all 350ms;

    :hover {
      cursor: pointer;
      color: black;
    }
  }
`;
