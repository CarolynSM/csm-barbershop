import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { navigate } from "../actions.js";

class GridSelected extends React.Component {
  render() {
    return (
      <MenuContainer>
        <GridSelectedButton onClick={() => this.props.navigate("GRID")}>Grid</GridSelectedButton>
        <ListUnselectedButton onClick={() => this.props.navigate("LIST")}>
          List
        </ListUnselectedButton>
      </MenuContainer>
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GridSelected);

const MenuContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 40px;
  width: 180px;
`;

const ListSelectedButton = styled.div`
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

const GridUnselectedButton = styled.div`
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

const GridSelectedButton = styled.div`
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

const ListUnselectedButton = styled.div`
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
