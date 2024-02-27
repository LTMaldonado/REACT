import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import {database} from '../../services/firebase/firebase'
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [prod, setProduct] = useState(null)

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productoD = doc (database, 'productos', productId)
        getDoc(productoD)
            .then (queryDocumentSnapshot => {
                const fields = queryDocumentSnapshot.data()
                const adaptado = { id: queryDocumentSnapshot.id, ...fields}
                setProduct(adaptado)
            })
            .catch(err => {
                alert ('Error cargando')
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [productId])

    if(loading) {
        return <h1>Cargando el producto...</h1>
    }
    return (
        <div className="contenedorDeDetalle">
            <h1>Detalle</h1>
            <ItemDetail {...prod} />
            <div></div>
        </div>
    )
}

export default ItemDetailContainer