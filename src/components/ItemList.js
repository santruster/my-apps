import Item from "./Item";

const ItemList = (props) => (
  <>
    <h1>ItemList</h1>
    <ul>
      {props.items.map((x) => (
        <Item item={x} />
      ))}
    </ul>
  </>
);

export default ItemList;
