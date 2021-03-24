import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

import ItemDetailContainer from "./ItemDetailContainer";

const Item = (props) => {
  return (
    <>
      <Router>
        <div class="card" styles="width: 4rem;">
          <div class="card-body">
            <h5 class="card-title">
              <Link to={`/item/${props.item.id}`}>{props.item.name}</Link>
            </h5>
            <p class="card-text">
              <ItemDetailContainer id={props.item.id}></ItemDetailContainer>
            </p>
          </div>
        </div>
        <Route path="/item/:id">
           <ItemDetailContainer id={props.item.id}></ItemDetailContainer>
        </Route>
      </Router>
    </>
  );
};

export default Item;
