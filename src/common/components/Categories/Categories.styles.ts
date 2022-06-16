import styled from "styled-components";

interface ItemType {
  active: boolean;
}

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li``;

export const Button = styled.button<ItemType>`
  color: ${props => (props.active ? "orange" : "white")};
`;
