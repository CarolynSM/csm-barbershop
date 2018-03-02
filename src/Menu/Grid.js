import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { navigate } from "../actions.js";
import grid from "./assets/grid-selected.png";
import list from "./assets/list-unselected.png";

class GridSelected extends Component {
  render() {
    return (
      <MenuContainer>
        <GridSelectedButton className="grid-button" onClick={() => this.props.navigate("GRID")}>
          <Icon src={grid} />
          <p>Grid</p>
        </GridSelectedButton>
        <ListUnselectedButton className="list-button" onClick={() => this.props.navigate("LIST")}>
          <Icon src={list} />
          <p>List</p>
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

const GridSelectedButton = styled.button`
  align-items: center;
  background-color: #2f80ed;
  border: none;
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

const ListUnselectedButton = styled.button`
  align-items: center;
  background-color: #fff;
  border: none;
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

const Icon = styled.img`
  height: 30%;
  padding: 0.4em;
  padding-left: 0;
  width: 15%;
`;
