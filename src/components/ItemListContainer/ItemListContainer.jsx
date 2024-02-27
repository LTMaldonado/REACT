import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList"
import { database } from  '../../services/firebase/firebase'
import { getDocs, collection} from "firebase/firestore";

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState ([])

    useEffect (() => {

        const productosC = collection (database, 'productos')
        getDocs(productosC)
            .then(querySnapshot => {
                const productosA = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return {id: doc.id, ...fields}
                })
                setProductos(productosA)
            })
            .catch(err => {
                alert('Error de carga')
            })
    }, [])

    return (
        <div className="itemContainer">
            <h1>{greeting}</h1>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer