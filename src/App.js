import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import { useState } from 'react';

function App() {
  const [stockActual, setStock]=useState(5);
  const restarStock = (e,nuevoStock)=>{
    e.preventDefault();
    if ((stockActual-nuevoStock)>=0)
      setStock((stockActual)=>stockActual-nuevoStock);
  };
  return (
    <div className="App">
        <NavBar />  
        <ItemListContainer />
        <ItemCount stock={stockActual} initial={1} onAdd={restarStock}/>        
    </div>
  );
}

export default App;
