import { useState } from "react";

export const useForm = <T extends Object>(form: T) => {
  const [formState, setFormState] = useState(form);

  const onInputChange = (value: string, field: keyof T) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

  return { ...formState, state: formState, onInputChange };
};
