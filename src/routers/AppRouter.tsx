import { useState } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { TodoRoutes } from "./TodoRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <Router>
      <>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            component={TodoRoutes}
            isAuthenticated={isLoggedIn}
            path="/"
            exact
          />
          <Redirect to="/auth/login" />
        </Switch>
      </>
    </Router>
  );
};
