import ItemCount from "./ItemCount";
import { useState } from "react";
import { NavLink, Route, Router } from "react-router-dom";
import cartContext from '../contexts/cartContext';
import Cart from "./Cart";
const ItemDetail = (props) => {
  const context=useContext(cartContext)
  const [stockActual, setStock] = useState(5);
  const restarStock = (e, nuevoStock) => {
    e.preventDefault();
    if (stockActual - nuevoStock >= 0){
      setStock((stockActual) => stockActual - nuevoStock);
      context.addItem(props.id,nuevoStock)
    }  

  };
  return (
    <>
      
        <p>{props.itemDetail.description}</p>
        <p>${props.itemDetail.price}</p>
        <img
          src={props.itemDetail.image}
          class="col-lg-11  align-items-stretch"
        />
        {stockActual > 0 ? (
          <ItemCount stock={stockActual} initial={1} onAdd={restarStock} />
        ) : (
          <NavLink to="/cart"> Terminar compra </NavLink>
        )}
        <Route exact path="/cart" component={Cart}></Route>
     
    </>
  );
};

export default ItemDetail;
