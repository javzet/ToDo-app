import { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { ProtectedRouteProps } from "../types";

export const PublicRoute: FC<ProtectedRouteProps> = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props: any) =>
        isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
