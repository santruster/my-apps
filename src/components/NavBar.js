
import CartWidget from "./CartWidget";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ItemListContainer from "./ItemListContainer";
import ItemList from "./ItemList";

function NavBar(props) {
  return (
    <Router>
    <div className="NavBar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link">
              <Link to="/">Home</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link to="/category/1">Category 1</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
              <Link to="/category/2">Category 2</Link>
              </a>
            </li>
          </ul>
          
        </div>
        <div class="float-right">
          <CartWidget />
          </div>
      </nav>
      <Switch>
      <Route exact path="/">
            <ItemListContainer items={props.items}></ItemListContainer>
      </Route>
      <Route path="/category/:id">
            <ItemList items={props.items}></ItemList>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default NavBar;
