import { FC, ChangeEvent, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "entities/lang/redux/langSlice";
import { AppState } from "redux/store";
import { LangType } from "types/enum";
import { Select } from "./LangSelect.styles";

const LangSelect: FC = () => {
  const { lang } = useSelector((state: AppState) => state.lang);
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    i18n.changeLanguage(lang.toLocaleLowerCase());
  }, [lang, i18n]);

  const handleLangChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = evt.target.value;

    dispatch(changeLang(selectedLang));
  };

  return (
    <Select onChange={handleLangChange} value={lang}>
      <option value={LangType.EN}>{LangType.EN}</option>
      <option value={LangType.UA}>{LangType.UA}</option>
    </Select>
  );
};

export default LangSelect;
