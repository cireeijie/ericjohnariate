import { useState } from 'react'
import logo from '../assets/images/ej-logo.png'
import './css/navbar.css'

const Navbar = () => {
    const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);

    const handleMobileMenu = () => {
        const lines = document.querySelectorAll('.line');
        const navMenu = document.querySelector('.nav-menu');

        if(mobileMenuOpen) {
            lines[0].classList.add('rotate-line-45');
            lines[1].classList.add('hide-line');
            lines[2].classList.add('rotate-line-315');
            navMenu.classList.add('show');
            setMobileMenuOpen(false);
        }
        else {
            lines[0].classList.remove('rotate-line-45');
            lines[1].classList.remove('hide-line');
            lines[2].classList.remove('rotate-line-315');
            navMenu.classList.remove('show');
            setMobileMenuOpen(true);
        }
    }

    return (
        <header className="section-row">
            <div className="navbar container">
                <div className="logo">
                    <a 
                        href="#"
                    >
                        <img 
                            src={logo} 
                            alt="Eric John Ariate"
                        />
                    </a>
                </div>
                <div className='menu'>
                    <div className="burger-menu" onClick={handleMobileMenu}>
                        <div className='line first-line'></div>
                        <div className='line second-line'></div>
                        <div className='line third-line'></div>
                    </div>
                    <ul className='nav-menu'>
                        <li className='menu-item about'>
                            <a href='#about'>About</a>
                        </li>
                        <li className='menu-item experience'>
                            <a href='#experiences'>Experience</a>
                        </li>
                        <li className='menu-item project'>
                            <a href='#projects'>Projects</a>
                        </li>
                        <li className='menu-item contact-btn'>
                            <a href='#contact' className='contact'>
                                <span>Contact</span>
                                <i className="fa-solid fa-chevron-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar