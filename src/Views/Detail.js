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
          <Image src={current.urls.small} />
        </ImageContainer>
        <ProfileImageContainer>
          <ProfileImage src={current.user.profile_image.medium} />
        </ProfileImageContainer>
        <Name>
          {current.user.first_name} {current.user.last_name}
        </Name>
        <UserName>@{current.user.username}</UserName>
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
  animation-name: fadeInOut;
  animation-duration: 1s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @keyframes fadeInOut {
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
  margin 0 1rem;
  width: 90%;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  padding: 3rem 3rem 2rem 3rem;
  justify-content: center;
`;

const ProfileImage = styled.img`
  border-radius: 100px;
  height: 20%;
  width: 20%;
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
  font-size: 14px;
  text-align: center;
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
`;

const City = styled.p`
  color: #000;
  font-size: 12px;
`;
