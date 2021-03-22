import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";

const ItemDetailContainer = (props) => {
  const [itemsDetail, setItemsDetail] = useState([]);
  useEffect(() => {
    new Promise((accepted, rejected) => {
      setTimeout(() => {
        accepted(
          { description: "descriction2", price: "1.99", image: 'https://image.shutterstock.com/image-vector/business-identity-branding-design-corporate-600w-1420209341.jpg', itemId: '1' }
        );
      }, 2000);
    }).then((result) => setItemsDetail(result));
  });

  return (
    <div className="ItemDetailContainer">
      <ItemDetail itemDetail={itemsDetail} id={props.id} ></ItemDetail>
    </div>);
}

export default ItemDetailContainer;
