import Item from './Item'
const Shop = (props) => {
    const {itemInfo} = props

    return(
        <div>
            Shop
            {itemInfo.map(info => {
                return <Item item={info.item} price={info.price} key={info.item}/>
            })}
        </div>
    )
}

export default Shop