import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { useCart } from '../context/CartContext'
import { Link } from "react-router-dom"

const ItemDetail = ({ id, name, img, price, stock, description }) => {
    const [quantityAdd, setQuantityAdd] = useState(0)

    const { addItem } = useCart()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        addItem(objProductToAdd)
        setQuantityAdd(quantity)
    }

    return (
        <article className="detalle">
            <picture>
                <img src={img} alt={name} style={{height: 250, border: '2px black solid', padding: 20, borderRadius: 20, backgroundColor: 'white'}}/>
            </picture>
            <aside>
                <h2>{name}</h2>
                    <p>Descripción: {description}</p>
                    <br />
                    <p>Precio: ${price}</p>
                <footer>
                    {
                        quantityAdd > 0 ? (
                            <>
                                <Link to='/cart'><button>Finalizar Compra</button></Link>
                                <Link to='/'><button>Seguir Comprando</button></Link>
                            </>

                            
                        ) : (
                            <ItemCount onAdd={handleOnAdd} stock={stock}/>
                        )
                    }
                </footer>
            </aside>

        </article>
    )
}

export default ItemDetail