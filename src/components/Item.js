import { useState } from "react";

const Item = (props) => {
  const { productInfo, addCartItems } = props;
  const [quantity, setQuantity] = useState(0);
  const { name, price, className } = productInfo;

  function adjustQuantity(event) {
    let newQuantity = event.target.value;
    if (newQuantity >= 0 && newQuantity <= 20) {
      setQuantity(newQuantity);
    }
  }

  function reserve() {
    if (quantity > 0) {
      let reservedInfo = {
        item: className,
        quantity: parseInt(quantity),
        productInfo: productInfo,
      };
      addCartItems(reservedInfo);
    }
    setQuantity(0);
  }

  return (
    <div className="item-card">
      <div className="image-wrapper">
        <div className={`image ${className}`} />
      </div>
      <div>
        <div className="item-info">
          <span>{name}</span>{" "}
        </div>
        <div className="item-qty">
          <span>
            Reserve Weight (${price}/kg):{" "}
            <input
              onChange={adjustQuantity}
              value={quantity}
              type="number"
              step="1"
              min="0"
              max="20"
            ></input>
            {" "}kg
          </span>
        </div>
        <div>
          <button className="reserve-btn" onClick={reserve}>
            Reserve - Total Price: ${quantity * price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
