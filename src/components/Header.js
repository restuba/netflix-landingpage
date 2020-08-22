import React, { Component } from "react";
import logo from "../images/logo.svg";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
// Media query
import { generateMedia } from "styled-media-query";
import bgImage from "../images/bg.jpg";

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <div className="header-top">
          <Logo src={logo} />
          <NavLink to="/login" className="btn signIn-btn">
            Sign In
          </NavLink>
        </div>
        <div className="header-content">
          <Title>See what's next.</Title>
          <SubTitle>WATCH ANYWHERE. CANCEL ANYTIME.</SubTitle>
          <Button className="main-offer-btn" primary>
            try it now
            <Icon className="Icon" icon={ic_keyboard_arrow_right} size={37} />
          </Button>
        </div>
      </HeaderContainer>
    );
  }
}

export default Header;

const customMedia = generateMedia({
  lgDekstop: "1350px",
  mdDekstop: "1150px",
  tablet: "960px",
  smTablet: "740px"
});

//Logo
const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 0;
  ${customMedia.lessThan("tablet")`
        left: 20%;
    `}
`;

//Header Container
const HeaderContainer = styled.div`
    width: 100%;
    height: 90vh;
    position: relative;
    background: radial-gradient(rgba(0,0,0,0), rgb(0,0,0,0.7)),
    url(${bgImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: var(--main-red-hover);
    ::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        box-shadow: inset 4.375rem 3.125rem 11.875rem #000, inset -4.375rem -3.125rem -11.875rem;
    }
    .signIn-btn{
        right: 0;
        margin: 1.125rem 3% 0;
        padding: 0.4375rem 1.0625rem;
        font-weight: 400;
        line-height: normal;
        border-radius: 0.1875rem;
        font-size: 1rem;
        background: var(--main-red);
        position: absolute;
        translate: transform(-50%, -50%);
        cursor: pointer;
        transition: background 0.2s ease-in;
        &:hover{
            background: var(--main-red-hover)
        }
        ${customMedia.lessThan("smTablet")`
            margin-top: 1.25rem;
            right: 5%;
        `}
    }

    //Header Top
    .header-top{
        position: relative;
        height: 10rem;
        z-index:1;
    }

    //Header Content
    .header-content{
        width: 65%;
        position: relative;
        margin: 4.5rem auto 0;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        flex-direction: column;
        z-index: 2;
        ${customMedia.lessThan("smTablet")`
            display: grid;
            grid-template-rows: repeat(3, 60px);
            margin-top: 8rem; 
        `}
    }

   

    //Icon
    .Icon svg{
        vertical-align: bottom;
        margin-left: 1.5rem;
        ${customMedia.lessThan("smTablet")`
            display: none !important;
        `}
    }

    .main-offer-btn{
        font-size: 1.5rem;
        ${customMedia.lessThan("lgDekstop")`
            margin: 0 33%;
            font-size: 1.5rem;
        `}

        ${customMedia.lessThan("mdDekstop")`
        margin: 0 25%;
        font-size: 1.5rem;
        `}

        ${customMedia.lessThan("tablet")`
        margin: 0 20%;
        font-size: 1.3rem;
        `}
    }
`;

//Main Title
const Title = styled.h1`
  margin: 0 0 1.25rem;
  font-size: 5rem;
  font-weight: 700;
  line-weight: 1.1em;
  ${customMedia.lessThan("tablet")`
        font-size: 2.4rem;
    `}
`;

//Subtitle
const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 1.25em;
  margin: 0 0 1.875rem;
  text-transform: uppercase;
  ${customMedia.lessThan("smTablet")`
        font-size: 1.2rem;
        margin: 0;
    `}
`;

//
