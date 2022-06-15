import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.orange};
  color: #fff;
  padding: 12px 22px;
  border-radius: 30px;
  margin-left: auto;
`;
