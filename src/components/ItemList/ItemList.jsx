import Item from '../Item/Item'


const ItemList = ({productos}) => {
    return (
        <div className="listado">
            {
                productos.map (prod => {
                    return <Item key = {prod.id} {...prod}/>
                })
            }
        </div>
    )
}

export default ItemList