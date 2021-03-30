import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AboutMeManangerPage } from "./pages/aboutme.mananger.page"
import { HomePage } from "./pages/home.page";
import { ProjectManangerPage } from "./pages/project.mananger.page";

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
          <Route
            exact
            path="/mananger-aboutme"
            component={AboutMeManangerPage}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
