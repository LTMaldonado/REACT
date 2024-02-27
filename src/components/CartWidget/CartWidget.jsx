import carro from '../../assets/images.png'
import { useCart } from "../context/CartContext"

const CartWidget = () => {
    const {totalQuantity} = useCart()

    return (
        <div style={{display: 'flex', backgroundColor: 'white', borderRadius: 20}}>
            <img style={{margin: 5, height: 20}} src={carro} alt="carrito" />
            <p style={{margin: 5}}>{totalQuantity}</p>
        </div>
    )
}
export default CartWidget