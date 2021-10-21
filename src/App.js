// import logo from './logo.svg';
import './App.css';
import NavBar from './pages/common/NavBar';
import { Route, Switch } from 'react-router';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Market from './pages/market/Market';
import Me from './pages/me/Me';

function App() {
  return (
    <>
      <NavBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/market" component={Market} />
          <Route exact path="/me" component={Me} />
          <Route exact path="/interality-ui" component={Home} />
        </Switch>
      </NavBar>
    </>
  );
}

export default App;
