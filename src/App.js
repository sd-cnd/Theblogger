import Navbar from './Navbar';
import Home from './Home';

//Importing Router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Create from './Create';
import BlogDetails from './BlogDetails';
import PageNoFound from './PageNoFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />              
            </Route>
            <Route path="*">
              <PageNoFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
