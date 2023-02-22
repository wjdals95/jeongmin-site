import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./layout/layout";
import Home from './pages/Home';


function App() {
  return (
    <Layout>
      <Switch>
      <Route path='/' exact>
            <Home />
        </Route>
        <Route path='/about'>
            About
        </Route>
        <Route path='/projects'>
            Projects
        </Route>
        
      </Switch>
    </Layout>
  );
}

export default App;
