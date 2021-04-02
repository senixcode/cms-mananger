import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routesPages } from "../../routesPages";

export function Router({ children }) {
  return (
    <BrowserRouter>
      {children}
      <div className="container p3">
        <SwitchRoutes />
      </div>
    </BrowserRouter>
  );
}

const SwitchRoutes = () => (
  <Switch>
    {routesPages.map((route, i) => (
      <Route key={i} exact path={route.path} component={route.component} />
    ))}
  </Switch>
);
