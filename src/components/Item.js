import { useState } from "react";

const Item = (props) => {
  const { item, price } = props;
  const [quantity, setQuantity] = useState(0);

  function adjustQuantity(event) {
      let newQuantity = event.target.value
      if (newQuantity >= 0 && newQuantity <= 20) {
        setQuantity(newQuantity)
      }
  }

  return (
    <div className="item-card">
      {console.log(props)}
      <div className="image-wrapper">
        <div className={`image ${item}`} />
      </div>
      <div className="item-info">
        <div>Price: ${price}/kg</div>
        <div>
          <span>Purchase Weight (Max 20kg): <input onChange={adjustQuantity} value={quantity} type="number" step="1" min="0" max="20"></input>kg</span>
        </div>
        <div>
            Total Price: ${quantity * price}
        </div>
      </div>
    </div>
  );
};

export default Item;
