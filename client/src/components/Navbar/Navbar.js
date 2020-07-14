import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import tj from '../../img/logos/tj.png';

const Navbar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    }
  })

  const handleOutsideClick = e => {
    if (dropdownOpen && wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <nav>
      <Link to='/' className='logo-container'><img className='logo' src={tj} alt='home' /></Link>
      <div className='default'>{props.children}</div>
      <div className='dropdown' ref={wrapperRef}>
        <button
          class={`hamburger hamburger--spin${dropdownOpen ? ' is-active' : ''}`}
          onClick={toggleDropdown}
          type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <div className={`dropdown-items${dropdownOpen ? '' : ' hidden'}`} onClick={toggleDropdown}>{props.children}</div>
      </div>
    </nav>
  )
}

export default Navbar;