import * as S from "./styles";

interface HeaderSpaceProps {
  children?: JSX.Element | JSX.Element[];
}

export const HeaderSpace: React.FC<HeaderSpaceProps> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};
