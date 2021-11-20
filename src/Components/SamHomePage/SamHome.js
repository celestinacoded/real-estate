import React from "react";
import styled from "styled-components";
// import Header from "./Header/Header";
// import Agents from "./TaibatHomePage/agents";
import SamProperty1 from "./SamProperty1";

const SamHomePage = () => {
  return (
    <Container>
      <Wrapper>
        {/* <Header /> */}
        <SamProperty1 />
        {/* <Agents /> */}
      </Wrapper>
    </Container>
  );
};

export default SamHomePage;

const Container = styled.div``;
const Wrapper = styled.div``;
