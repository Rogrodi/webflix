import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';

function App() {
  return (
    <Router>
    <div className="App">
    
      <Header/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>

    </div>
    </Router>
  );
}

export default App;
