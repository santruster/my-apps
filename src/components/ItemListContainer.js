import ItemList from "./ItemList";

const ItemListContainer = (props) => (  
    <div className="ItemListContainer">      
      <ItemList items={props.items}/>
    </div>  
);

export default ItemListContainer;
