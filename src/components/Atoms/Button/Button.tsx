import * as S from "./styles";

interface ButtonProps {
  action: string;
  background: "primary" | "secondary";
  bordered?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  action,
  background,
  bordered = false,
}) => {
  return (
    <S.Container background={background} bordered={bordered}>
      <S.Action bordered={bordered}>{action}</S.Action>
    </S.Container>
  );
};
