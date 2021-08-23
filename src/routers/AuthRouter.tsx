import { Redirect, Route, Switch } from "react-router-dom";
import { AuthAppbar } from "../components/AuthAppbar";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const AuthRouter = () => {
  return (
    <>
      <AuthAppbar />
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/register" component={Register} />
        <Redirect to="/auth/login" />
      </Switch>
    </>
  );
};
