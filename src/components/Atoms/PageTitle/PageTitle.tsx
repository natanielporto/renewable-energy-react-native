import * as S from "./styles";

interface PageTitleProps {
  title: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return <S.Title>{title}</S.Title>;
};
