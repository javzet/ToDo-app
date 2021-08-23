import { ReactNode } from "react";

interface AuthContentProps {
  children: ReactNode;
}

export function AuthContent({ children }: AuthContentProps): JSX.Element {
  return (
    <div className="auth">
      <div className="auth-content">{children}</div>
    </div>
  );
}
