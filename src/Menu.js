import styled from "styled-components";

const ListActive = () => {
  return (
    <div>
      <GridUnselected>Grid</<GridUnselected>
      <ListSelected>List</ListSelected>
    </div>
  );
};

const GridActive = () => {
  return (
    <div>
      <GridSelected>Grid</GridSelected>
      <ListUnselected>List</ListUnselected>
    </div>
  );
};

const ListSelected = styled.div``;

const ListUnselected = styled.div``;

const GridSelected = styled.div``;

const GridUnselected = styled.div``;
