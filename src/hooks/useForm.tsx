import { useState } from "react";

export const useForm = <T extends Object>(form: T) => {
  const [formState, setFormState] = useState(form);
  const initalState = form;

  const onInputChange = (value: string, field: keyof T) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

  const onReset = () => {
    setFormState(initalState);
  };

  return { ...formState, state: formState, onInputChange, onReset };
};
