import React from "react";
import styled from "styled-components";
import { fireAuth } from "../../firebase";
import authImg from "../../Image/authImg.png";
import Register from "./register";
import { useContext } from "react";
import { AuthContext} from "../../firebase";

const Main = () => {
  const { currentUser } = useContext(AuthContext);
  //   console.log(currentUser.email);
  const handleLogout = () => {
    fireAuth.signOut();
  };
  return (
    <Container>
      {currentUser && <Button onClick={handleLogout}>Logout</Button>}
      <Wrapper>
        <Image src={authImg} />
        {!currentUser && <Register />}
      </Wrapper>
    </Container>
  );
};

export default Main;
const Button = styled.button`
  width: 100px;
  height: 35px;
  color: white;
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 0;
  font-size: 17px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 5px;
`;
const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  margin-right: ;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #e5eaf2;
`;
