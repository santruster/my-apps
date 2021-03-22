const ItemDetail = (props) => (
  <>
    <p>{props.itemDetail.description}</p>
    <p>${props.itemDetail.price}</p>
    <img src={props.itemDetail.image} />
  </>
)

export default ItemDetail;
