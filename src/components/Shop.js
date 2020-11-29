import Item from "./Item";
const Shop = (props) => {
  const { itemInfo, addCartItems } = props;
  return (
    <div>
      Shop
      {Object.keys(itemInfo).map((info) => {
        return (
          <Item
            productInfo={itemInfo[info]}
            addCartItems={addCartItems}
            key={info.name}
          />
        );
      })}
    </div>
  );
};

export default Shop;
