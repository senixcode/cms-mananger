import { Router } from "./componentes/common/Route";
import { Navigation } from "./componentes/common/Navbar";
import "bootswatch/dist/darkly//bootstrap.min.css";
function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App;
