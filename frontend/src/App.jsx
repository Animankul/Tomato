import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Navbar from './components/Navbar/Navbar'
import Cart from './pages/Cart/cart'
import Home from './pages/Home/home'
import PlaceOrder from './pages/PlaceOrder/placeOrder'
const App = () => {

const[showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Order' element={<PlaceOrder/>}/>

       
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App