import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Verification from "./Verification";
import Dashboard from "./Dashboard";
import VerificationSuccess from "./VerificationSuccess";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/verification">
            <Verification />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/verification-success">
            <VerificationSuccess />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
