import ItemList from "./ItemList";

const ItemListContainer = (props) => (
  
    <div className="ItemListContainer">
      <h1>Container</h1>
      <ItemList items={props.items}/>
    </div>
  
);

export default ItemListContainer;
