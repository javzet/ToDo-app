import { FC } from "react";

export const InputPassword: FC = () => {
  return (
    <>
      <input type="password" id="password" />
      <input type="password" id="confirm-password" />
    </>
  );
};
