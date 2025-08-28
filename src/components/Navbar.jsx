import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import '../styles/Navbar.css'

export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setCollectionsOpen(false);
  }

  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <Link className='logo' 
        to='/' 
        onClick={closeMobileMenu}>
          Wasky Wears
        </Link>

        {/*desktop*/}
        <ul className='nav-links desktop'>
          <li>
            <Link to='/' >Home</Link>
          </li>
          <li
          className='dropDown'
          onMouseEnter={() => setCollectionsOpen(true)}
          onMouseLeave={() => setCollectionsOpen(false)}
          >
            <Link to='/Collection' >Collection</Link>
            <AnimatePresence>
              {collectionsOpen && (
                <motion.ul
                className='dropdown-menu'
                initial={{ 
                  opacity: 0,
                  y: -10
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  y: -10
                }}
                transition={{ duration: 0.2}}
                >
                  <li>
                    <Link to='/Trousers'>Trousers</Link>
                  </li>
                  <li>
                    <Link to='/Shirts'>Shirts</Link>
                  </li>
                  <li>
                    <Link to='/Jackets'>Jackets</Link>
                  </li>
                  <li>
                    <Link to='/Shoes'>Shoes</Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li>
            <Link to='/About' >About</Link>
          </li>
          <li>
            <Link to='/Contact' >Contact</Link>
          </li>

        </ul>

        {/*Hamburger menu button for mobile */}
        <div 
        className={`hamburger mobile ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label='Toggle menu'
        role='button'
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setMobileMenuOpen(!mobileMenuOpen);
          }
        }}
        >
          <div></div>
        </div>
      </div>
      
      {/* Mobile Menu*/}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
          <motion.div
          className='menu-overlay'
          onClick={closeMobileMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3}}
          />
          <motion.ul
          className='mobile-menu'
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3}}
          >
            <li>
              <Link to='/'
              onClick={closeMobileMenu}
              >Home</Link>
            </li>
            <li>
              <div className='mobile-dropdown-header'>
                <Link to='/Collection'
                onClick={closeMobileMenu}>Collections</Link>
                <button
            className='mobile-dropdown-toggle'
            onClick={() => setCollectionsOpen(!collectionsOpen)}
            aria-expanded={collectionsOpen}
            aria-controls='collections-submenu'
            >
              {collectionsOpen ? '\u25BE' : '\u25B8'}
              </button>
              <AnimatePresence>
              {collectionsOpen && (
                <motion.ul
                id='collections-submenu'
                className='dropdown-submenu'
                initial={{
                  height: 0,
                  opacity: 0
                }}
                animate={{
                  height: 'auto',
                  opacity: 1
                }}
                exit={{
                  height: 0,
                  opacity: 0
                }}
                transition={{ duration: 0.3}}
                >
                  <li>
                    <Link
                    to='/Trousers'
                    onClick={closeMobileMenu}
                    >Trousers</Link>
                  </li>
                  <li>
                    <Link
                    to='/Shirts'
                    onClick={closeMobileMenu}
                    >Shirts</Link>
                  </li>
                  <li>
                    <Link
                    to='/Jackets'
                    onClick={closeMobileMenu}
                    >Jackets</Link>
                  </li>
                  <li>
                    <Link
                    to='/Shoes'
                    onClick={closeMobileMenu}
                    >Shoes</Link>
                  </li>
                </motion.ul>
              )}
              </AnimatePresence>
              </div>
            </li>
            <li>
              <Link to='/About' onClick={closeMobileMenu}>About</Link>
            </li>
            <li>
              <Link to='/Contact' onClick={closeMobileMenu}>Contact</Link>
            </li>
            
          </motion.ul>
          </>
        )}
      </AnimatePresence>
      
    </nav>
  );
}
