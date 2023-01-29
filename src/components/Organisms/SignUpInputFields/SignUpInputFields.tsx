import React from "react";
import { InputField } from "../../Molecules/InputField/InputField";

export const SignUpInputFields = () => {
  return (
    <>
      <InputField label="First Name" placeholder="John" />
      <InputField label="Last Name" placeholder="Johns" />
      <InputField label="E-mail" placeholder="email@example.com" type="email" />
      <InputField
        label="Password"
        placeholder="Minimum 8 characters"
        type="password"
      />
    </>
  );
};
