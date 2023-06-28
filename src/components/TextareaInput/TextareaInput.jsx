import React from "react";
import { ContactTextArea, TextareaContainer } from "./TextareaInput.styled";
import { InputLabel } from "../Input/Input.styled";

const TextareaInput = ({ label, placeholder }) => {
  return (
    <TextareaContainer>
      <InputLabel>{label}</InputLabel>
      <ContactTextArea name="message" rows="5" placeholder={placeholder} />
    </TextareaContainer>
  );
};

export default TextareaInput;
