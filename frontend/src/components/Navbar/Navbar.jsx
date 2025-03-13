import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoredContext';
import './Navbar.css';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("menu");
  const {getTotalCartAmount, token, setToken} = useContext(StoreContext);

  return(
    <div className='navbar'>
        <Link to="./"><img src={assets.logo} alt="" className='logo'/></Link>
        <ul className="navbar-menu">
           <Link to="./"> <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li></Link>
            <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
            <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
            <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
               <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}> </div>  
            </div>
            {!token ? 
                <button onClick={()=>setShowLogin(true)}>sign in</button>
            : 
            <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li><img src={assets.bag_icon} alt="Orders" /><p>Orders</p></li>
              <hr />
              <li> <img src={assets.logout_icon} alt="Logout" /><p>Logout</p> </li>
            </ul>
          </div>
          
            }
        </div>
    </div>
  )
}

export default Navbar;
