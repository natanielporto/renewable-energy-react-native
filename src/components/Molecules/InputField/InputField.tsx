import React from "react";
import { View } from "react-native";
import { Input } from "../../Atoms/Input/Input";
import { Label } from "../../Atoms/Label/Label";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: "password" | "email" | null;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type,
}) => {
  return (
    <View>
      <Label label={label} />
      <Input placeholder={placeholder} type={type} />
    </View>
  );
};
