import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import { getPhotos, navigate, showDetail } from "./actions.js";
import ListSelected from "./Menu/List.js";
import GridSelected from "./Menu/Grid.js";
import List from "./List.js";
import Grid from "./Grid.js";
import Detail from "./Detail.js";

class Photos extends Component {
  componentDidMount() {
    const { getPhotos } = this.props;
    getPhotos();
  }

  currentMenu() {
    if (this.props.view === "LIST") {
      return <ListSelected />;
    } else if (this.props.view === "GRID") {
      return <GridSelected />;
    } else return <ListSelected />;
  }

  currentView() {
    if (this.props.view === "LIST") {
      return <List photos={this.props.photos} />;
    } else if (this.props.view === "GRID") {
      return <Grid photos={this.props.photos} />;
    } else if (this.props.view === "DETAILS") {
      return <Detail />;
    } else return <List photos={this.props.photos} />;
  }

  toggleHeader() {
    if (this.props.view !== "DETAILS") {
      return (
        <Header>
          <Title>My Photos</Title>
          {this.currentMenu()}
        </Header>
      );
    } else {
      return (
        <DetailHeader>
          <CloseContainer onClick={() => this.props.navigate("LIST")}>
            <LineOne />
            <LineTwo />
          </CloseContainer>
        </DetailHeader>
      );
    }
  }

  render() {
    return (
      <body>
        {this.toggleHeader()}
        <main>{this.currentView()}</main>
      </body>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos.photos,
  selectedPhoto: state.photos.selectedPhoto,
  view: state.photos.view
});

const mapDispatchToProps = dispatch => ({
  navigate: view => {
    dispatch(navigate(view));
  },
  getPhotos: () => {
    dispatch(getPhotos());
  },
  showDetail: id => {
    dispatch(showDetail(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Photos);

const Header = styled.header`
  align-items: center;
  cursor: default;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
  padding-bottom: 1rem;
`;

const Title = styled.h1`
  color: #171717;
  font-size: 32px;
  font-weight: 600;
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 24px;
  }
`;

const DetailHeader = styled.header`
  cursor: default;
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
`;

const CloseContainer = styled.div`
  padding-right: 1rem;
  padding-top: 1rem;
  width: 25px;
`;

const LineOne = styled.div`
  background-color: #2f80ed;
  height: 1px;
  transform: rotate(-45deg);
  width: 3rem;
`;

const LineTwo = styled.div`
  background-color: #2f80ed;
  height: 1px;
  transform: rotate(45deg);
  width: 3rem;
`;
