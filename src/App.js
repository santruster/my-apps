import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import { useEffect, useState } from "react";


function App() {
  const [stockActual, setStock] = useState(5);
  const restarStock = (e, nuevoStock) => {
    e.preventDefault();
    if (stockActual - nuevoStock >= 0)
      setStock((stockActual) => stockActual - nuevoStock);
  };
  const [items, setItems] = useState([]);
  useEffect(() => {
    new Promise((accepted, rejected) => {
      setTimeout(() => {
        accepted([
          { id:'0', name: "objeto1"},
          { id:'1', name: "objeto2"}
        ]);
      }, 2000);
    }).then((result) => setItems(result));
  });
  return (
    <div className="App">
      <NavBar />
      <ItemCount stock={stockActual} initial={1} onAdd={restarStock} />
      <ItemListContainer items={items} />
      
    </div>
  );
}

export default App;
