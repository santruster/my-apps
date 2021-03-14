import { useState } from 'react';
const ItemCount = ({stock, initial, onAdd})=> {
  const [title, setTitle] = useState('')
    return (
      <div >
          <form class="form-group">
          Stock: {stock}
          <input class="form-control" id="cantidad" onChange={event => setTitle(event.target.value)} type="number" placeholder={initial}></input>
          <button class="btn btn-primary" onClick={(e) => {onAdd(e,title)}}>Agregar al carrito</button>
          </form>  
      </div>
    );
  };
  
  export default ItemCount;