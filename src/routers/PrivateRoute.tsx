import { FC } from "react";
import { Redirect, Route } from "react-router-dom";
import { ProtectedRouteProps } from "../types";

export const PrivateRoute: FC<ProtectedRouteProps> = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props: any) =>
        isAuthenticated
          ? (
          <Component {...props} />
            )
          : (
          <Redirect to="/auth/login" />
            )
      }
    />
  );
};
