import { useState, useEffect } from "react";
import { TODO_CONTEXT } from "./context/ToDo-Context";
import { Appbar } from "./components/Appbar";
import { CreateForm } from "./components/CreateForm";
import { DataGrid } from "./components/Grid/DataGrid";
import { getData } from "./helpers/getData";
import { DataType } from "./types";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";

export default function ToDo() {
  // const [generalData, setGeneralData] = useState<DataType[]>([]);
  // const [newCreation, setNewCreation] = useState<{
  //   type: "notes" | "todos" | "";
  //   active: boolean;
  // }>({
  //   type: "",
  //   active: false,
  // });

  // useEffect(() => {
  //   setGeneralData(getData());
  // }, []);

  return (
    <Provider store={store}>
      <Router>
        <>
          <Appbar />
          <Switch>
            <Route path="/create/note" exact>
              <CreateForm type="notes" />
            </Route>
            <Route path="/create/todo" exact>
              <CreateForm type="todos" />
            </Route>
            <Route path="/" component={Main} exact />
          </Switch>
        </>
      </Router>

      {/* <div>
        <Appbar />
        <div className="content">
          {!newCreation.active && <DataGrid data={generalData} />}

          {newCreation.type === "notes" && <CreateForm type="notes" />}
          {newCreation.type === "todos" && <CreateForm type="todos" />}
        </div>
      </div> */}
    </Provider>
  );
}
