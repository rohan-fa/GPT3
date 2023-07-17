import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg'

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">What is GPT?</a></p>
  <p><a href="#possibilities">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>
)

//BEM --> Block Element Modifire (for the css classNames)
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type="Button">Sign up</button>  
      </div>
      <div className='gpt3__navbar-menu'> 
    {/* if toggleMenu in that case we can show specific Icon, The Icon to close the menu, (if its currently open), we will set a onclick function and fix it as false  */}
        {toggleMenu
         ? <RiCloseLine color="fff" size={27} onClick={() => setToggleMenu(false)} /> 
         : <RiMenu3Line color="fff" size={27} onClick={() => setToggleMenu(true)} /> 
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type="Button">Sign up</button>  
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    
  )
  
}

export default Navbar