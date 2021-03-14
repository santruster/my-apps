import { useState } from 'react';
const ItemCount = ({stock, initial, onAdd})=> {
  const [input, setInput] = useState('')
    return (
      <div >
          <form class="form-group">
          Stock: {stock}
          <input class="form-control" id="cantidad" onChange={event => setInput(event.target.value)} type="number" placeholder={initial}></input>
          <button class="btn btn-primary" onClick={(e) => {onAdd(e,input)}}>Agregar al carrito</button>
          </form>  
      </div>
    );
  };
  
  export default ItemCount;