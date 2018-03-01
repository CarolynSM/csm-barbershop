import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { showDetail } from "../actions.js";

class Grid extends Component {
  render() {
    const { photos } = this.props;
    return (
      <Container className="grid-container">
        <StyledGrid>
          {photos.map(item => {
            return (
              <ImgContainer key={item.id}>
                <GridImage src={item.urls.small} onClick={() => this.props.showDetail(item.id)} />
              </ImgContainer>
            );
          })}
        </StyledGrid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos.photos,
  selectedPhoto: state.photos.selectedPhoto,
  view: state.photos.view
});

const mapDispatchToProps = dispatch => ({
  showDetail: id => {
    dispatch(showDetail(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);

const Container = styled.div`
  animation-name: fadeInOut;
  animation-duration: 1s;
  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StyledGrid = styled.div`
  display: grid;
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem;
  }
  @media only screen and (min-device-width: 800px) and (max-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 1.5) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const GridImage = styled.img`
  display: block;
  height: 90%;
  margin: 0.5em 0;
  width: 90%;
`;
