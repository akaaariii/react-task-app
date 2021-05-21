import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="logo" />
      Tasker
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  margin-bottom: 24px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 10px -10px;
`;
const Logo = styled.img`
  width: 45px;
  margin-left: 16px;
`;
