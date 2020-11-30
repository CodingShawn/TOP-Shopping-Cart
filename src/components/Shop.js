import Item from "./Item";
import Info from "./Info"
const Shop = (props) => {
  const { itemInfo, addCartItems } = props;
  return (
    <div className="shop">
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
      <Info/>
    </div>
  );
};

export default Shop;
