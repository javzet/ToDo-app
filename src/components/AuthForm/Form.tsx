import { ReactChild } from "react";

interface AuthFormProps {
  type: "register" | "login";
  children: [ReactChild, ReactChild];
  title: string;
  handleSubmit(): void;
}

export function Form({
  type,
  children,
  title,
  handleSubmit
}: AuthFormProps): JSX.Element {
  return (
    <form
      id={type}
      className="auth-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h2 className="form-header">{title}</h2>
      <div className="form-content">{children[0]}</div>
      <div className="form-footer">{children[1]}</div>
    </form>
  );
}
