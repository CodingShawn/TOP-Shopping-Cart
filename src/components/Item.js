const Item = (props) => {
    const {item , price} = props

  return (
    <div className="item-card">
      {console.log(props)}
      <div className="image-wrapper">
        <div className={`image ${item}`} />
      </div>
      <div className="item-info">
        Price: ${price}/kg
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
};

export default Item;
