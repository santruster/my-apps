import { useParams } from "react-router";
import Item from "./Item";

const ItemList = (props) => {
  let {id}=useParams();
  let list="";
  if (id)
    list=props.items.filter((x) => x.category===id);
  else
    list=props.items;    
  return(
  <>
    <div class="card-deck">
      <div class="container mt-10">
        <div class="row col-lg-8 d-flex align-items-stretch">
          <div class="card-deck">
            {           
            list.map((x) => (            
                <Item item={x} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default ItemList;
