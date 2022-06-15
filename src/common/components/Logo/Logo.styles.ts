import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  margin-right: 10px;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
