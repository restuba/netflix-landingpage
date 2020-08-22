import React, { Component } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import bgImage from "../images/bg.jpg";

class Login extends Component {
  render() {
    return (
      <LoginContainer>
        <div className="header-top">
          <Logo src={logo} alt="logo" className="logo" />
        </div>
      </LoginContainer>
    );
  }
}

export default Login;

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: radial-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0, 0.5)),
    url(${bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--main-red-hover);
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: inset 70px 50px 190px #000, inset -70px -50px -190px;
  }
  .header-top {
    position: relative;
    height: 10rem;
    z-index: 1;
  }
`;

//Logo
const Logo = styled.img`
  width: 11rem;
  position: absolute;
  top: 25%;
  left: 11%;
  transform: translate(-50%, -50%);
  margin-left: 0;
`;
