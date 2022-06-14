import { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import styled from "styled-components";

const Basement = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export type AppBasementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const AppBasement: FC<AppBasementProps> = () => {
  const currentYear = format(new Date(), "yyyy");
  const { t } = useTranslation();

  return (
    <Basement>
      {t("pages.home.copyright")} {currentYear} - {t("pages.home.rights")}
    </Basement>
  );
};

export default AppBasement;
