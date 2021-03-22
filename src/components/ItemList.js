import Item from "./Item";

const ItemList = (props) => (
  <>
    <ul>
      {props.items.map((x) => (
        <Item item={x} />
      ))}
    </ul>
  </>
);

export default ItemList;
