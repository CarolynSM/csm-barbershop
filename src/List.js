import React, { Component } from "react";
import styled from "styled-components";

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledList = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  padding: 0.7em 0;
  margin: 1rem;
`;

const Image = styled.img`
  @media only screen and (min-device-width: 800px) and (max-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 1.5) {
    height: 30%;
    width: 30%;
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    height: 20%;
    width: 20%;
  }
`;

const AnchorContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  padding: 0 1rem;
  text-wrap: unrestricted;
`;

const Anchor = styled.a`
  color: #2f80ed;
  font-size: 24px;
  font-weight: 600;
  line-height: 33px;
  overflow-wrap: break-word;
  text-align: left;
  text-decoration: none;
  word-break: break-all;
  word-wrap: break-word;
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 16px;
    line-height: 22px;
  }
`;
