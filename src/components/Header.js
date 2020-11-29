import Navbar from './Navbar'

const Header = (props) => {
    return (
        <header>
            <h1>
                Durian Goodness
            </h1>
            <Navbar {...props}/>
        </header>
    )
}

export default Header