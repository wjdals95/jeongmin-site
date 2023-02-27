import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Layout from "./layout/layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import FoodOrder from "./components/FoodOrder";
import Login from "./components/Login";
import GreatQuotes from './components/GreatQuotes'

import "./App.css";

function App() {
  const location = useLocation();
  return (
    <Layout>
      <TransitionGroup className="transitions-wrapper">
        <CSSTransition
          key={location.pathname}
          classNames={"right"}
          timeout={300}
        >
          <Switch location={location}>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/projects/foodorder">
              <FoodOrder />
            </Route>
            <Route path="/projects/login">
              <Login />
            </Route>
            <Route path="/projects/greatQuotes">
              <GreatQuotes />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
}

export default App;
