import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './Components/HomeComponent'

function App() {
  return (
    <div className="App">
      <Router>
        <Route  path='/' component={Home} exact />
      </Router>
    </div>
  );
}

export default App;
