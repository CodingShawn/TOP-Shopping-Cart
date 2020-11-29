const Cart = (props) => {
    const {cartItems} = props

    console.log(cartItems)
    
    function getTotalPrice() {
        let totalPrice = Object.keys(cartItems).reduce((acc, key) =>{
            let subtotal = cartItems[key].itemInfo.price * cartItems[key].quantity
            return acc + subtotal
        }, 0)
        return totalPrice
    }

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2">
                        Durian
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Quantity
                    </th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(cartItems).map(key => {
                    let itemInfo = cartItems[key].itemInfo
                    return (
                        <tr>
                            <td>
                                <div className={`cart ${itemInfo.className}`}></div>
                            </td>
                            <td>
                                {itemInfo.name}
                            </td>
                            <td>
                                ${itemInfo.price}/kg
                            </td>
                            <td>
                                {cartItems[key].quantity}kg
                            </td>
                            <td>
                                ${cartItems[key].quantity * itemInfo.price}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="4">Total:</td>
                    <td>${getTotalPrice()}</td>
                </tr>
                <tr>
                    <td colSpan="5">
                        <button>Place Order</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}

export default Cart