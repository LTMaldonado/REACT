const products = [
    { 
        id: '1', 
        name: 'Buzo', 
        price: 45000, 
        category: 'buzos', 
        img:'https://gazi.com.ar/wp-content/uploads/2023/07/PhotoRoom_20230711_085303.jpg', 
        stock: 13, 
        description:'Buzo oversize negro'
    },
    { id: '2', name: 'Jean', price: 29070, category: 'pantalon', img:'https://http2.mlstatic.com/D_NQ_NP_619105-MLA71353328288_082023-O.webp', stock: 25, description:'Jean MOM gris'},
    { id: '3', name: 'Remera', price: 9900, category: 'remeras', img:'https://sportotalar.vtexassets.com/arquivos/ids/430463/1232102253_01_1.jpg?v=638211425669400000', stock: 17, description:'Remera boxi fit blanca'}
]





export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductsByID = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}