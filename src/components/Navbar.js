import {Link} from 'react-router-dom'

const Navbar = (props) => {
    let numCartItems = Object.keys(props.cartItems).length

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/shop'>Shop</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart { numCartItems ? `(${numCartItems})` : ""} </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar