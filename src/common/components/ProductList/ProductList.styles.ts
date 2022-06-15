import styled from "styled-components";

export const Container = styled.div`
  padding: 0 36px;
`;

export const Products = styled.ul`
  display: grid;
  grid-column-gap: 11px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
`;
