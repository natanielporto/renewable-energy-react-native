import * as S from "./styles";

interface ButtonProps {
  action: string;
  background?: "primary" | "secondary";
  bordered?: boolean;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  action,
  background = "primary",
  bordered = false,
  onPress,
}) => {
  return (
    <S.Container background={background} bordered={bordered} onPress={onPress}>
      <S.Action bordered={bordered}>{action}</S.Action>
    </S.Container>
  );
};
