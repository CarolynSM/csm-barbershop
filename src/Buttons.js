import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { getPhotos } from "./actions.js";
import plus from "./plus.png";
import loading from "./loading.png";

class Button extends Component {
  currentButton() {
    const buttonState = this.props.button;
    if (this.props.view === "DETAILS") {
      return;
    } else {
      switch (buttonState) {
        case "TEXT_ICON":
          return (
            <TextIcon onClick={() => this.props.getPhotos()}>
              <Icon src={plus} />
              <p>Get Photos</p>
            </TextIcon>
          );
        case "TEXT":
          return <TextIcon onClick={() => this.props.getPhotos()}>Get Photos</TextIcon>;
        case "HOVER":
          return <HoverFocus onClick={() => this.props.getPhotos()}>Get Photos</HoverFocus>;
        case "FOCUS":
          return <HoverFocus onClick={() => this.props.getPhotos()}>Get Photos</HoverFocus>;
        case "ACTIVE":
          return <Active onClick={() => this.props.getPhotos()}>Get Photos</Active>;
        case "DISABLED":
          return <LoadingDisabled>Get Photos</LoadingDisabled>;
        case "LOADING":
          return (
            <LoadingDisabled>
              <Icon src={loading} />
            </LoadingDisabled>
          );
      }
    }
  }

  render() {
    return <ButtonContainer>{this.currentButton()}</ButtonContainer>;
  }
}

const mapStateToProps = state => ({
  photos: state.photos.photos,
  selectedPhoto: state.photos.selectedPhoto,
  view: state.photos.view
});

const mapDispatchToProps = dispatch => ({
  getPhotos: () => {
    dispatch(getPhotos());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);

const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const TextIcon = styled.button`
  align-items: center;
  background-color: #2f80ed;
  border-radius: 2px;
  color: #fff;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  justify-content: center;
  width: 180px;
`;

const HoverFocus = styled.button`
  align-items: center;
  background-color: #33adff;
  border-radius: 2px;
  color: #fff;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  justify-content: center;
  width: 180px;
`;

const Active = styled.button`
  align-items: center;
  background-color: #3f67d4;
  border-radius: 2px;
  color: #fff;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  justify-content: center;
  width: 180px;
`;

const LoadingDisabled = styled.button`
  align-items: center;
  background-color: #8eb7ed;
  border-radius: 2px;
  color: #fff;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  justify-content: center;
  width: 180px;
`;

const Icon = styled.img`
  height: 16px;
  padding-right: 0.5em;
  width: 16px;
`;
