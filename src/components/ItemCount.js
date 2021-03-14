import { useState } from 'react';
const ItemCount = ({stock, initial, onAdd})=> {
  const [title, setTitle] = useState('')
    return (
      <div >
          <form>
          Stock: {stock}
          <input id="cantidad" onChange={event => setTitle(event.target.value)} type="number" placeholder={initial}></input>
          <button onClick={(e) => {onAdd(e,title)}}>Agregar al carrito</button>
          </form>  
      </div>
    );
  };
  
  export default ItemCount;