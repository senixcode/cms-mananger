import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ListAllPage } from "./pages/listAll.page";
import { ProjectManangerPage } from "./pages/project.page";

export function Router({ children }) {
  return (
    <BrowserRouter>
      {children}
      <div className="container p4">
        <Switch>
          <Route exact path="/" component={ListAllPage} />
          <Route
            exact
            path="/mananger-project"
            component={ProjectManangerPage}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
