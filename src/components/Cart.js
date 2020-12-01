const Cart = (props) => {
  const { cartItems, adjustCartItems, deleteCartItem } = props;

  function getTotalPrice() {
    let totalPrice = Object.keys(cartItems).reduce((acc, key) => {
      let subtotal = cartItems[key].itemInfo.price * cartItems[key].quantity;
      return acc + subtotal;
    }, 0);
    return totalPrice;
  }

  function addQuantity(key) {
    let newQuantity = cartItems[key].quantity + 1;
    if (newQuantity <= 20) {
      adjustCartItems(key, newQuantity);
    }
  }

  function reduceQuantity(key) {
    let newQuantity = cartItems[key].quantity - 1;
    if (newQuantity > 0) {
      adjustCartItems(key, newQuantity);
    }
  }

  function removeItem(key) {
    deleteCartItem(key);
  }

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Durian</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(cartItems).map((key) => {
            let itemInfo = cartItems[key].itemInfo;
            return (
              <tr>
                <td className="cart-img-wrapper">
                  <div className={`cart-img ${itemInfo.className}`}></div>
                  <div className="cart-item">{itemInfo.name}</div>
                </td>
                <td>${itemInfo.price}/kg</td>
                <td>
                  {cartItems[key].quantity}kg 
                  {"  "}
                  <button onClick={() => addQuantity(key)}>+</button>
                  {"  "}
                  <button onClick={() => reduceQuantity(key)}>-</button>
                </td>
                <td>${cartItems[key].quantity * itemInfo.price}</td>
                <td>
                  <button onClick={() => removeItem(key)}>
                    Remove From Cart
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="align-end">Total:</td>
            <td>${getTotalPrice()}</td>
            <td>
              <button className="order-btn">Place Reservation</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
