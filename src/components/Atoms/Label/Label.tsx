import * as S from "./styles";

interface LabelProps {
  label: string;
}

export const Label: React.FC<LabelProps> = ({ label }) => {
  return <S.Label>{label}</S.Label>;
};
