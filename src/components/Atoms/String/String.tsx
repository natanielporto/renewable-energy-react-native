import * as S from "./styles";

interface StringProps {
  children: string | JSX.Element | JSX.Element[];
}

export const String: React.FC<StringProps> = ({ children }) => {
  return <S.StringContainer>{children}</S.StringContainer>;
};
