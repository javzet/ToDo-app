import { Appbar } from "./components/Appbar";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Main from "./pages/Main";
import CreatePage from "./pages/CreatePage";

export default function ToDo() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Appbar />
          <div className="content">
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
          </div>
        </>
      </Router>
    </Provider>
  );
}
