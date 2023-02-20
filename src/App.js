import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./layout/layout";

function App() {
  return (
    <Layout>
      <Switch>
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
