import React, { Component } from "react";
import styled from "styled-components";

export default class Grid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("list props", this.props.photos);
    const { photos } = this.props;
    return (
      <Container className="grid-container">
        <StyledGrid>
          {photos.map(item => {
            return (
              <ImgContainer>
                <GridImage key={item.id} src={item.urls.small} />
              </ImgContainer>
            );
          })}
        </StyledGrid>
      </Container>
    );
  }
}

const Container = styled.div``;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  padding: 0.5em 0;
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
