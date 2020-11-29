import Item from './Item'
const Shop = (props) => {
    const {itemInfo, adjustCartItems} = props

    return(
        <div>
            Shop
            {itemInfo.map(info => {
                return <Item item={info.item} price={info.price} adjustCartItems={adjustCartItems} key={info.item}/>
            })}
        </div>
    )
}

export default Shop