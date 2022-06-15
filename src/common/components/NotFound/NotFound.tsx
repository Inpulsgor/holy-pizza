import { FC } from "react";
import { useTranslation } from "react-i18next";
import { AppContainer } from "common/layout";
import { NotFoundProps } from "./NotFound.types";
import { Title, Message } from "./NotFound.styles";

const NotFound: FC<NotFoundProps> = () => {
  const { t } = useTranslation();

  return (
    <AppContainer>
      <Title>{t("pages.not_found.message")}</Title>
      <Message>{t("pages.not_found.redirect")}</Message>
    </AppContainer>
  );
};

export default NotFound;
