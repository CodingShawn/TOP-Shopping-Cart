import Item from "./Item";
const Shop = (props) => {
  const { itemInfo, adjustCartItems } = props;
  return (
    <div>
      Shop
      {Object.keys(itemInfo).map((info) => {
        return (
          <Item
            productInfo={itemInfo[info]}
            adjustCartItems={adjustCartItems}
            key={info.name}
          />
        );
      })}
    </div>
  );
};

export default Shop;
