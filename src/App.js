import "./App.css";
import NavBar from "./components/NavBar";


import { useEffect, useState } from "react";
import cartContext from "./contexts/cartContext";


function App() {
  
  const [items, setItems] = useState([]);
  useEffect(() => {
    new Promise((accepted, rejected) => {
      setTimeout(() => {
        accepted([
          { id:'0', name: "objeto1", category:'1'},
          { id:'1', name: "objeto2",category:'2'}
        ]);
      }, 2000);
    }).then((result) => setItems(result));
  });
  return (
    <div className="App">
       <cartContext.Provider>
      <NavBar items={items}/>
      </cartContext.Provider>   
       
    </div>
  );
}

export default App;
