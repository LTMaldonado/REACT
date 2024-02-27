import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

const Cart = () => {

    const { cart, total, removeItem } = useCart()

    return (
        <div className="carrito">
            <h1>Carrito</h1>
            <section>
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id} className="detalleEnCarro">
                            <h3>{prod.name}</h3>
                            <h4>Cantidad: {prod.quantity}</h4>
                            <h4>Precio por unidad: ${prod.price}</h4>
                            <h4>Subtotal: ${prod.quantity * prod.price}</h4>
                            <button onClick={() => removeItem(prod.id)}>Remover</button>
                        </div>
                    )
                })
            }
            </section>
            <section>
                <h1>Total: ${total}</h1>
            </section>
            <Link to={'/checkout'} >
                <button className="checkout">
                Checkout
                </button>
            </Link>
        </div>
    )
}

export default Cart 