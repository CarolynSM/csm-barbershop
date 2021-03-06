import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { loadPhotos, navigate, showDetail } from "./actions.js";
import ListSelected from "./Menu/List.js";
import GridSelected from "./Menu/Grid.js";
import List from "./Views/List.js";
import Grid from "./Views/Grid.js";
import Detail from "./Views/Detail.js";
import Button from "./Buttons.js";

class Photos extends Component {
  componentDidMount() {
    const { loadPhotos } = this.props;
    loadPhotos();
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
          <CloseContainer className="detail-close" onClick={() => this.props.navigate("LIST")}>
            <LineOne />
            <LineTwo />
          </CloseContainer>
        </DetailHeader>
      );
    }
  }

  buttonState() {
    return this.props.photos.length < 15 ? "TEXT_ICON" : "DISABLED";
  }

  render() {
    return (
      <div>
        {this.toggleHeader()}
        <main>{this.currentView()}</main>
        <Button button={this.buttonState()} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos.photos,
  selectedPhoto: state.photos.selectedPhoto,
  view: state.photos.view,
  button: state.photos.button
});

const mapDispatchToProps = dispatch => ({
  loadPhotos: () => {
    dispatch(loadPhotos());
  },
  navigate: view => {
    dispatch(navigate(view));
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
  padding: 2rem 3rem;
  padding-bottom: 1rem;
  @media only screen and (min-device-width: 800px) and (max-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 1.5) {
    padding: 2rem;
    padding-bottom: 1rem;
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    padding: 1rem;
  }
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
