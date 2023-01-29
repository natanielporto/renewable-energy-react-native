import { useCallback, useState } from "react";
import * as S from "./styles";

export const CheckBox = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheck = useCallback(() => setChecked(!checked), [checked]);

  return <S.CheckBox onPress={handleCheck} checked={checked} />;
};
