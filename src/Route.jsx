import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/home.page";
import { ProjectManangerPage } from "./pages/project.page";

export function Router({ children }) {
  return (
    <BrowserRouter>
      {children}
      <div className="container p4">
        <Switch>
          <Route exact path="/" component={HomePage} />
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
