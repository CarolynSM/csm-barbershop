import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import location from "./location.png";

class Detail extends Component {
  constructor(props) {
    super(props);
  }

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
    console.log("current", current);
    return (
      <DetailContainer>
        <Image src={current.urls.small} />
        <ProfileImage src={current.user.profile_image.small} />
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
  height: 100vh;
`;

const Image = styled.img``;

const ProfileImage = styled.img`
  border-radius: 50px;
`;

const LocationContainer = styled.div``;

const Name = styled.h2``;

const UserName = styled.p``;

const Icon = styled.img`
  height: 20px;
  width: 20px;
`;

const City = styled.p``;
