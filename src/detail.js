import React, { Component } from "react";
import styled from "styled-components";

export default class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { photos } = this.props;
    return (
      <div>
        <Image />
        <ProfileImage />
        <Name />
        <UserName />
        <LocationContainer>
          <Icon src="./location.png" />
          <Location />
        </LocationContainer>
      </div>
    );
  }
}

const Image = style.img``;

const ProfileImage = styled.img``;

const LocationContainer = styled.div``;

const Name = styled.h2``;

const UserName = styled.p``;

const LocationContainer = styled.div``;

const Icon = styled.img``;

const Location = styled.p``;
