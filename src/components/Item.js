import ItemDetailContainer from "./ItemDetailContainer";
const Item = (props) => (
  <>
    <div class="card" styles="width: 8rem;">
      <div class="card-body">
        <h5 class="card-title">{props.item.name}</h5>
        <p class="card-text"><ItemDetailContainer id={props.item.id}></ItemDetailContainer></p>
      </div>
    </div>
  </>
);

export default Item;
