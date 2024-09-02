import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Layout/Home';
import Role from './Layout/Role';
import How from './Layout/How';
import Ai from './Layout/Ai';

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
        <Route exact path="/ai">
          <Ai />
        </Route>
      </Switch>
    </section>
  );
}

export default App;
