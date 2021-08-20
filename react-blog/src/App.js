import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const currentUser = false;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register">{currentUser ? <Home /> : <Register />}</Route>
        <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
        <Route path="/write">{currentUser ? <Write /> : <Register />}</Route>
        <Route path="/settings">{currentUser ? <Settings /> : <Register />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
