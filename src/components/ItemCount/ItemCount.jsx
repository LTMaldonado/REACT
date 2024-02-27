import { useState } from "react"

const ItemCount = ({stock, inicio = 1, onAdd}) => {
    const  [conteo, setConteo] = useState(inicio)

    const aumento = () => {
        if (conteo < stock) {
            setConteo (conteo + 1)
        }
    }

    const decremento = () => {
        if (conteo > 1) {
            setConteo (conteo - 1)
        }
    }

    return (
            <div>
                <h3 style={{marginTop: 20}}>{conteo}</h3>
                <button onClick={decremento}>-</button>
                <button onClick={() => onAdd(conteo)}>Agregar al carrito</button>
                <button onClick={aumento}>+</button>
            </div>
    )
}

export default ItemCount