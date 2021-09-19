import Login from './auth/Login';
import Landing from './landing/Landing';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="*" component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
