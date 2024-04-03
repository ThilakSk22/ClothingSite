import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import { MenuOutlined, ShoppingCartOutlined, HeartOutlined, CloseCircleOutlined } from '@ant-design/icons';


function App() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="App">
    <div className='NavbarComp'>
      <div className='CompanyLogo'>
        <img src={require('./assets/ButterflyLogoPink.png')} alt='LOGO'/>
      </div>
      
      <div className={showMenu ? "ActiveMobMenu" : "NavbarMenu"}>
        <div className="HamburgerMenuClose">
           <p onClick={()=>setShowMenu(false)}><CloseCircleOutlined style={{ fontSize:"22px", color:"red" }}/></p>
        </div>
       <ul className="NavbarUlist">
         <li><a onClick={()=>setShowMenu(false)} href='#Home'>Home</a></li>
         <li><a onClick={()=>setShowMenu(false)} href='#Shop'>Shop</a></li>
         <li><a onClick={()=>setShowMenu(false)} href='#New Arrivals'>New Arrivals</a></li>
         <li><a onClick={()=>setShowMenu(false)} href='#About'>About</a></li>
         <li><a onClick={()=>setShowMenu(false)} href='#Contact'>Contact</a></li>
       </ul>
      </div>

      <div className='SignInCartComp'>
       <ul className="NavbarUlist">
         <button>Sign In</button>
       </ul>
         <p><HeartOutlined style={{ fontSize:"18px" }} /></p>  
         <p><ShoppingCartOutlined style={{ fontSize:"18px" }}/></p>
         <p className="HamburgerMenu" onClick={()=>setShowMenu(true)}><MenuOutlined style={{ fontSize:"18px" }}/></p>
      </div>
    </div>

    <div id="Home">
      <Home />
    </div>
    <div id="Shop">
      <Shop />
    </div>
    </div>
  );
}

export default App;
