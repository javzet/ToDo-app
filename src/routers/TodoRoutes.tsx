import { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import CreatePage from "../pages/CreatePage";
import Main from "../pages/Main";

export const TodoRoutes: FC = () => {
  return (
    <>
      <Appbar />
      <Switch>
        <Route path="/create/note" exact>
          <CreatePage type="note" />
        </Route>
        <Route path="/create/todo" exact>
          <CreatePage type="todo" />
        </Route>
        <Route path="/" component={Main} exact />
        <Redirect to="/" />
      </Switch>
    </>
  );
};
