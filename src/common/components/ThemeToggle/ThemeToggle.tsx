import { FC } from "react";
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "./ThemeToggle.styles";

const ThemeToggle: FC = () => {
  return (
    <CheckBoxWrapper>
      <CheckBox id="checkbox" type="checkbox" />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};

export default ThemeToggle;
