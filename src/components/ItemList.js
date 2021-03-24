import Item from "./Item";

const ItemList = (props) => (
  <>
    <div class="card-deck">
      <div class="container mt-10">
        <div class="row col-lg-8 d-flex align-items-stretch">
          <div class="card-deck">
            {props.items.map((x) => (
              <Item item={x} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ItemList;
