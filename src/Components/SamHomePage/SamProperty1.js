import React from "react";
import SamSaiHomePage from "./SamSaiHompage";
import styled from "styled-components";
import SamProperty2 from "./SamProperty2";


const SamProperty1 = () => {
  return (
    <div>
      <TitleHolder>
        <Title>THE LATEST LISTINGS</Title>
        <SubTitle>
          New Properties for Sale in <span>Nigeria</span>
        </SubTitle>
      </TitleHolder>
      <SamSaiHomePage />
      <TitleHolder style={{ marginTop: "50px" }}>
        <Title>MY SEARCHES</Title>
        <SubTitleClose>New Homes To Let in <span> Lagos</span>
         </SubTitleClose>
      </TitleHolder>
      <SamProperty2 />
    </div>
  );
};

export default SamProperty1;

const TitleHolder = styled.div`
  text-align: center;
  margin-top: 50px;
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
`;

// const Nav = styled.div`
// color: blue;
// `;