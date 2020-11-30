import Item from "./Item";
const Shop = (props) => {
  const { itemInfo, addCartItems } = props;
  return (
    <div className="items-display">
      {Object.keys(itemInfo).map((info) => {
        return (
          <Item
            productInfo={itemInfo[info]}
            addCartItems={addCartItems}
            key={info}
          />
        );
      })}
    </div>
  );
};

export default Shop;
