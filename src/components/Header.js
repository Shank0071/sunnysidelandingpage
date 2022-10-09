import './Header.css';
import background from '../images/desktop/image-header.jpg';
import arrowDown from '../images/icon-arrow-down.svg';
import { useState } from 'react';
import menu from '../images/icon-hamburger.svg'


export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  return (
    <div className='Header' style={{backgroundImage:`url(${background})`}}>
        <nav className='navbar'>
            <h2>sunnyside</h2>
            <button onClick={handleToggle}>
              {navbarOpen ? (<img src={menu} alt="menu" />) : (<img src={menu} alt="menu" />)}
            </button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <li>About</li>
                <li>Services</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
        </nav>
        <h1>We Are Creatives</h1>
        <img src={arrowDown} alt="arrow_down" />
    </div>
  )
}
