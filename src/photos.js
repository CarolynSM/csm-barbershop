import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import { getPhotos, navigate, showDetail } from "./actions.js";
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
      return (
        <MenuContainer>
          <GridUnselected onClick={() => this.props.navigate("GRID")}>Grid</GridUnselected>
          <ListSelected onClick={() => this.props.navigate("LIST")}>List</ListSelected>
        </MenuContainer>
      );
    } else if (this.props.view === "GRID") {
      return (
        <MenuContainer>
          <GridSelected onClick={() => this.props.navigate("GRID")}>Grid</GridSelected>
          <ListUnselected onClick={() => this.props.navigate("LIST")}>List</ListUnselected>
        </MenuContainer>
      );
    } else
      return (
        <MenuContainer>
          <GridUnselected onClick={() => this.props.navigate("GRID")}>Grid</GridUnselected>
          <ListSelected onClick={() => this.props.navigate("LIST")}>List</ListSelected>
        </MenuContainer>
      );
  }

  currentView() {
    if (this.props.view === "LIST") {
      console.log("should be the LIST view");
      return <List photos={this.props.photos} />;
    } else if (this.props.view === "GRID") {
      console.log("should be the GRID view");
      return <Grid photos={this.props.photos} />;
    } else if (this.props.view === "DETAILS") {
      console.log("should be the DETAIL view");
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
      return <DetailHeader />;
    }
  }

  render() {
    console.log("this is them", this.props.photos);
    return (
      <div className="wrapper">
        {this.toggleHeader()}
        <div className="container">{this.currentView()}</div>
      </div>
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

const MenuContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 40px;
  width: 180px;
`;

const ListSelected = styled.div`
  align-items: center;
  background-color: #2f80ed;
  border-radius: 2px;
  color: #fff;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  height: 100%;
  justify-content: center;
  line: 22px;
  text-align: center;
  width: 50%;
`;

const GridUnselected = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 2px;
  color: #2f80ed;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  height: 100%;
  justify-content: center;
  line: 22px;
  text-align: center;
  width: 50%;
`;

const GridSelected = styled.div`
  align-items: center;
  background-color: #2f80ed;
  border-radius: 2px;
  color: #fff;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  height: 100%;
  justify-content: center;
  line: 22px;
  text-align: center;
  width: 50%;
`;

const ListUnselected = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 2px;
  color: #2f80ed;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  height: 100%;
  justify-content: center;
  line: 22px;
  text-align: center;
  width: 50%;
`;

const DetailHeader = styled.header``;
