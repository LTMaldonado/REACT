import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return ( 
    <nav>
        <h1>Shanus</h1>
        <div className="navBar">
            <Link to= './'><button>Inicio</button></Link>
            <Link to= './'><button>Productos</button></Link>
            <Link to= '/cart'><button>Carro</button></Link>
        </div>
        <CartWidget />
    </nav>)
}
export default NavBar