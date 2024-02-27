import { Link } from 'react-router-dom'

const Item = ({ id, name, img, stock, price}) => {
    return (
        <article>
            <img src={img} style={{width: 100, height: 100, border: '2px black solid', padding: 20, borderRadius: 20, backgroundColor: 'white'}}/>
            <h4>{name}</h4>
            <h4 style={{margin: 10}}>${price}</h4>
            <h4>Stock disponible: {stock}</h4>
            <Link to= {`/detail/${id}`}><button>Ver Detalle</button></Link>
        </article>
    )
}

export default Item