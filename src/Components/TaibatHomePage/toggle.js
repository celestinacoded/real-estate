import React from "react";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
const Toggle = () => {
  const [toggle, setToggle] = React.useState(false);

  const onToggler = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <Icon onMouseEnter={onToggler} onMouseLeave={onToggler}>
        {toggle ? <FaHeart /> : <FiHeart />}
      </Icon>
    </div>
  );
};

export default Toggle;
const Icon = styled.div`
  position: absolute;
  right: 10px;
  color: white;
  margin-top: 5px;
  font-size: 20px;
  transition: all 400ms;
  transform: scale(1);

  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;
