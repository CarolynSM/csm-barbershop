import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import { getPhotos } from "./actions.js";
import List from "./List.js";
import Grid from "./Grid.js";

class Photos extends Component {
  componentDidMount() {
    const { getPhotos } = this.props;
    getPhotos();
  }

  render() {
    console.log("this is them", this.props.photos);
    return (
      <div className="wrapper">
        <Header>
          <Title>My Photos</Title>
        </Header>
        <div className="container">
          <List photos={this.props.photos} />
          <Grid photos={this.props.photos} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos.photos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPhotos
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Photos);

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem 1rem;
`;

const Title = styled.h1`
  color: #171717;
  font-size: 24px;
  font-weight: 600;
`;
