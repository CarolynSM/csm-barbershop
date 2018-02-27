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
              <ListItem key={item.id}>
                <Image src={item.urls.thumb} />
              </ListItem>
            );
          })}
        </StyledGrid>
      </Container>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: [col-start] 1fr [col-left] 1fr [col-right] 1fr [col-end];
  grid-template-rows: [row-start] 1fr [row-mid] 1fr [row-end];
`;

const StyledList = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  padding: 1rem 0;
`;

const Image = styled.img`
  height: 30%;
  width: 30%;
`;
