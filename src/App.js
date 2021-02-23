import BrowserDetect from "./components/BrowserDetect";
import RegisterForm from "./components/RegisterForm";
import TopNavbar from "./components/TopNavbar";
//
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <TopNavbar></TopNavbar>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <BrowserDetect></BrowserDetect>
            <div className="container ">
              <div className="row justify-content-center align-content-center ">
                <div className="col-6 border m-2">
                  <RegisterForm></RegisterForm>
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
