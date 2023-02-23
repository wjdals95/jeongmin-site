import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./layout/layout";
import Home from './pages/Home';
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./components/ProjectDetail";


function App() {
  return (
    <Layout>
      <Switch>
      <Route path='/' exact>
            <Home />
        </Route>
        <Route path='/about'>
            <About />
        </Route>
        <Route path='/projects' exact>
            <Projects />
        </Route>
        <Route path='/projects/projectDetail1'>
          <ProjectDetail />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
