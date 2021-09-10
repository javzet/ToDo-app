import { useSelector } from "react-redux";
import { HashRouter, Redirect, Switch } from "react-router-dom";
import { TodoState } from "../types";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { TodoRoutes } from "./TodoRoutes";

export const AppRouter = () => {
  const { isAuthenticated } = useSelector((state: TodoState) => state.auth);

  return (
    <HashRouter>
      <>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            component={TodoRoutes}
            isAuthenticated={isAuthenticated}
            path="/"
            exact
          />
          <Redirect to="/auth/login" />
        </Switch>
      </>
    </HashRouter>
  );
};
