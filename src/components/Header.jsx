import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.svg'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="logo"/>
      Tasker
    </HeaderContainer>
  )
}

export default Header


const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background-color: #dbdbdb;
  margin-bottom: 24px;
`;
const Logo = styled.img`
  width: 45px;
  margin: 0 16px;
  border-radius: 8%;
`;