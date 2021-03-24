import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

import { useEffect, useState } from "react";


function App() {
  
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
      <NavBar items={items}/>
     
      <ItemListContainer items={items} />
      
    </div>
  );
}

export default App;
