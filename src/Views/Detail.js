import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import location from "./location.png";

class Detail extends Component {
  getCurrentPhoto(array, id) {
    const current = array.filter(item => item.id === id);
    return current[0];
  }

  setLocationIcon(place) {
    if (place !== null) {
      return <Icon src={location} />;
    }
  }

  render() {
    const current = this.getCurrentPhoto(this.props.photos, this.props.selectedPhoto);
    return (
      <DetailContainer>
        <ImageContainer>
          <Image src={current.urls.regular} />
        </ImageContainer>
        <ProfileImageContainer>
          <ProfileImage src={current.user.profile_image.large} />
        </ProfileImageContainer>
        <Name>
          {current.user.first_name} {current.user.last_name}
        </Name>
        <UserName className="username">@{current.user.username}</UserName>
        <LocationContainer>
          {this.setLocationIcon(current.user.location)}
          <City>{current.user.location}</City>
        </LocationContainer>
      </DetailContainer>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos.photos,
  selectedPhoto: state.photos.selectedPhoto,
  view: state.photos.view
});

export default connect(mapStateToProps)(Detail);

const DetailContainer = styled.div`
  animation-name: fadeIn;
  animation-duration: 1s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;

const Image = styled.img`
  height: 90%;
  margin 1rem 5rem;
  width: 90%;
  @media only screen and (min-device-width: 800px) and (max-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 1.5) {
    height: 90%;
    margin 0 1rem;
    width: 90%;
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    height: 90%;
    margin 0 1rem;
    width: 90%;
  }
`;

const ProfileImageContainer = styled.div`
  display: flex;
  padding: 3rem 3rem 2rem 3rem;
  justify-content: center;
`;

const ProfileImage = styled.img`
  border-radius: 150px;
  height: 10%;
  width: 10%;
  @media only screen and (min-device-width: 800px) and (max-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 1.5) {
    border-radius: 150px;
    height: 30%;
    width: 30%;
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    border-radius: 100px;
    height: 20%;
    width: 20%;
  }
`;

const LocationContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 4rem;
`;

const Name = styled.h2`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  padding: 0.5em;
  text-align: center;
`;

const UserName = styled.p`
  color: #000;
  font-size: 24px;
  text-align: center;
  @media only screen and (min-device-width: 800px) and (max-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 1.5) {
    font-size: 24px;
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 14px;
  }
`;

const Icon = styled.img`
  height: 35px;
  width: 35px;
  @media only screen and (min-device-width: 800px) and (max-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 1.5) {
    height: 35px;
    width: 35px;
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    height: 20px;
    width: 20px;
  }
`;

const City = styled.p`
  color: #000;
  font-size: 20px;
  @media only screen and (min-device-width: 800px) and (max-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 1.5) {
    font-size: 20px;
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 12px;
  }
`;
