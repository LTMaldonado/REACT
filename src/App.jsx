import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './components/context/CartContext'
import  Cart  from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (
    <>
    <BrowserRouter> 
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element = {<ItemListContainer greeting={"Lista de productos"}/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element = {<Cart/>} />
          <Route path='/checkout' element = {<Checkout/>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
