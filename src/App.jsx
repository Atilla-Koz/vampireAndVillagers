import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Layout/Home';
import Role from './Layout/Role';
import How from './Layout/How';

function App() {
  return (
    <section>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/role">
          <Role />
        </Route>
        <Route exact path="/how">
          <How />
        </Route>
      </Switch>
    </section>
  );
}

export default App;
