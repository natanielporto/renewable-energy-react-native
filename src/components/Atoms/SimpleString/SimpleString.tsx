import * as S from "./styles";

interface SimpleStringProps {
  children: string | JSX.Element | JSX.Element[];
  justify?: "center" | undefined;
  color?: string;
}

export const SimpleString: React.FC<SimpleStringProps> = ({
  children,
  justify,
  color,
}) => {
  return (
    <S.StringContainer justify={justify} color={color}>
      {children}
    </S.StringContainer>
  );
};
