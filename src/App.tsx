import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import "tachyons";
import Stock from "./components/Stock";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages";
import NotFoundPage from "./pages/404";
import StockPage from "./pages/stock";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/stock/" component={StockPage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
