import React from "react";
import { InputField } from "../../Molecules/InputField/InputField";

export const LoginInputFields = () => {
  return (
    <>
      <InputField label="E-mail" placeholder="email@example.com" type="email" />
      <InputField
        label="Password"
        placeholder="Minimum 8 characters"
        type="password"
      />
    </>
  );
};
