const Item = (props) => (
  <>
    <h1>Item</h1>
    <li>{props.item.name}</li>
    <p>{props.item.description}</p>
  </>
);

export default Item;
