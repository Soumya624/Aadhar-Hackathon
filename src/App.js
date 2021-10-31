import logo from './logo.svg';
import Demo from './Components/Demo';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './Components/HomeComponent'

function App() {
  return (
    <div className="App">
      <Router>
        <Route  path='/' component={Home} exact />
        {/* <Route path='/demo' component={Demo} exact /> */}
      </Router>
    </div>
  );
}

export default App;
