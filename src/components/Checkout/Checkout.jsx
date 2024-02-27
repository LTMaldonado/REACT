import { collection, where, getDocs, query, documentId, writeBatch, addDoc } from "firebase/firestore"
import { useCart } from "../context/CartContext"
import { database } from "../../services/firebase/firebase"
import { useState } from "react"


const Checkout = () => {

    const generarOrden = async () => {
        const {orderId, setOrderId} = useState(null)
        const {cart, total} = useCart ()

        const orden = {
            buyer: {nombre: 'luciano', email: 'luciano@gmail', tel: 1257596977},
            item: cart,
            total
        }
        const batch = writeBatch(database)
        const ids = cart.map (prod => prod.id)

        const outStock = []
        const productosComprados = query (collection(database, 'productos'), where(documentId(), 'in', ids))

        const querySnapshot = await getDocs(productosComprados)

        const {docs} = querySnapshot

        docs.forEach (doc => {
            const fields = doc.data()
            const stockDB = fields.stock

            const productoAniadido = cart.find (prod => {prod.id === doc.id})
            const productoCantidad = productoAniadido.quantity

            if(stockDB >= productoCantidad) {
                batch.update(doc.ref, {stock: stockDB - productoCantidad})
            }
            else {
                outStock.push ({id: doc.id, ...fields})
            }
        })
        if (outStock.length === 0) {
            batch.commit()

            const orderCollection = collection(database, 'order')
            const orderId = await addDoc(orderCollection, orden)

            setOrderId(orderId)
        }
        else {
            alert('Productos seleccionados sin stock.')
        }
    }

    return (
        <>
            <h1>Checkout</h1>
            <button onClick={generarOrden}>Generar orden</button>
        </>
    )
}

export default Checkout