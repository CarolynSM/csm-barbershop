import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import { getPhotos } from "./actions.js";
import List from "./List.js";
import Grid from "./List.js";

class Photos extends Component {
  componentDidMount() {
    const { getPhotos } = this.props;
    getPhotos();
  }

  render() {
    console.log("this is them", this.props.photos);
    return (
      <div className="wrapper">
        <header>
          <h1>My Photos</h1>
        </header>
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
