import React, { Component } from "react";
import styled from "styled-components";

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("list props", this.props.photos);
    const { photos } = this.props;
    return (
      <Container className="list-container">
        <StyledList>
          {photos.map(item => {
            return (
              <ListItem key={item.id}>
                <Image src={item.urls.thumb} />
                <AnchorContainer>
                  <Anchor href={item.links.html}>{item.links.html}</Anchor>
                </AnchorContainer>
              </ListItem>
            );
          })}
        </StyledList>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
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

const AnchorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;

const Anchor = styled.a`
  color: #2f80ed;
  font-weight: 600;
`;
