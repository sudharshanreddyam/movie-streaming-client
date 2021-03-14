import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import bgImage from "../../assets/images/header-background.jpg";

import Logo from "../../assets/images/netflix.png";
import AddMovie from "./Components/AddMovie/AddMovie";
import SearchBox from "./Components/SearchBox/SearchBox";

const HeaderSc = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
	background-size: 100% 100%;
  position: relative;
`;

const HeaderWrapperSc = styled.div`
  display: flex;
  height: 400px;
  flex-direction: column;
`;

const TitleAddMovieWrapperSc = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 75px;
  padding: 20px
`;

const LogoSc = styled.div`
    width: 200px;
    height: 150px;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;

const FindMovieSc = styled.div`
  display: flex;
  font-size: 47px;
  padding-left: 170px;
  color: #fff;
  font-family: sans-serif;
  padding-bottom: 40px;
`;

export class Header extends Component {
  static propTypes = {};

  render() {
    return (
      <HeaderSc>
        <HeaderWrapperSc>
          <TitleAddMovieWrapperSc>
            <LogoSc></LogoSc>
            <AddMovie></AddMovie>
          </TitleAddMovieWrapperSc>
          <FindMovieSc>FIND YOUR MOVIE</FindMovieSc>
          <SearchBox></SearchBox>
        </HeaderWrapperSc>
      </HeaderSc>
    );
  }
}

export default Header;
