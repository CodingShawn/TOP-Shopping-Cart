import { useState } from "react";

const Item = (props) => {
  const { productInfo, adjustCartItems } = props;
  const [quantity, setQuantity] = useState(0);
  const { name, price, className } = productInfo;

  function adjustQuantity(event) {
    let newQuantity = event.target.value;
    if (newQuantity >= 0 && newQuantity <= 20) {
      setQuantity(newQuantity);
    }
  }

  function reserve() {
    let reservedInfo = { item: className, quantity: parseInt(quantity) };
    adjustCartItems(reservedInfo);
  }

  return (
    <div className="item-card">
      <div className="image-wrapper">
        <div className={`image ${className}`} />
      </div>
      <div className="item-info">
        <div>{name}</div>
        <div>Price: ${price}/kg</div>
        <div>
          <span>
            Purchase Weight (Max 20kg):{" "}
            <input
              onChange={adjustQuantity}
              value={quantity}
              type="number"
              step="1"
              min="0"
              max="20"
            ></input>
            kg
          </span>
        </div>
        <div>Total Price: ${quantity * price}</div>
        <div>
          <button onClick={reserve}>Reserve</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
