import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import { getPhotos, navigate } from "./actions.js";
import List from "./List.js";
import Grid from "./Grid.js";

class Photos extends Component {
  componentDidMount() {
    const { getPhotos } = this.props;
    getPhotos();
  }

  currentView() {
    if (this.props.view === "LIST") {
      return <List photos={this.props.photos} />;
    } else if (this.props.view === "GRID") {
      return <Grid photos={this.props.photos} />;
    } else return <List photos={this.props.photos} />;
  }

  render() {
    console.log("this is them", this.props.photos);
    return (
      <div className="wrapper">
        <Header>
          <Title>My Photos</Title>
          <div className="menu-container">
            <div onClick={() => this.props.navigate("GRID")}>Grid</div>
            <div onClick={() => this.props.navigate("LIST")}>List</div>
          </div>
        </Header>
        <div className="container">{this.currentView()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos.photos,
  view: state.photos.view
});

const mapDispatchToProps = dispatch => ({
  navigate: view => {
    dispatch(navigate(view));
  },
  getPhotos: () => {
    dispatch(getPhotos());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Photos);

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #171717;
  font-size: 32px;
  font-weight: 600;
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 24px;
  }
`;
