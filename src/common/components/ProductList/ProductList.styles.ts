import styled from "styled-components";

export const Container = styled.div`
  padding: 32px 36px;
`;

export const Products = styled.ul`
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;
