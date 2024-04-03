import React, {useState} from 'react'
import "../styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='NavbarComp'>
      <div className='CompanyLogo'>
        <img src={require('../assets/ButterflyLogoPink.png')} alt='LOGO'/>
      </div>
      
      <div className={showMenu ? "ActiveMobMenu" : "NavbarMenu"}>
        <div className="HamburgerMenuClose">
           <p onClick={()=>setShowMenu(false)}>X</p>
        </div>
       <ul className="NavbarUlist">
         <li><a href='#Home'>Home</a></li>
         <li><a href='#Shop'>Shop</a></li>
         <li><a href='#New Arrivals'>New Arrivals</a></li>
         <li><a href='#About'>About</a></li>
         <li><a href='#Contact'>Contact</a></li>
       </ul>
      </div>

      <div className='SignInCartComp'>
       <ul className="NavbarUlist">
         <button>Sign In</button>
       </ul>
         <p>❤️</p>  
         <p>🛒</p>
         <p className="HamburgerMenu" onClick={()=>setShowMenu(true)}>|||</p>
      </div>
    </div>
  )
}

export default Navbar 