import styled from "styled-components";

export const Card = styled.div`
  transition: all 0.2s ease-in-out;
  background-color: transparent;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Image = styled.img`
  margin-bottom: 10px;
`;

export const Title = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 800;
  line-height: 24px;
  text-align: center;
  letter-spacing: 1%;
  margin-bottom: 20px;
`;

export const Properties = styled.div`
  display: flex;
  background-color: #f3f3f3;
  border-radius: 10px;
  flex-direction: column;
  padding: 6px;
`;

export const Thickness = styled.ul`
  display: flex;
  flex: 1;
`;

export const ThicknessItem = styled.li`
  padding: 8px;
  flex: 1;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  @include noselect();

  &.active {
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    cursor: auto;
  }
`;

export const Sizes = styled.ul`
  display: flex;
  flex: 1;
`;

export const SizeItem = styled.li`
  padding: 8px;
  flex: 1;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  @include noselect();
  &.active {
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    cursor: auto;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.015em;
`;

export const AddToCart = styled.button``;

export const ButtonText = styled.span``;

export const Quantity = styled.span``;
