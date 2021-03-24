
import CartWidget from "./CartWidget";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

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
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
          
        </div>
        <div class="float-right">
          <CartWidget />
          </div>
      </nav>
      <Route exact path="/">
            <ItemDetailContainer items={props.items}/>
          </Route>
    </div>
    </Router>
  );
}

export default NavBar;
