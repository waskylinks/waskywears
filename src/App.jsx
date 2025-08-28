import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Trousers from './pages/Trousers'
import Shirts from './pages/Shirts'
import Jackets from './pages/Jackets'
import Shoes from './pages/Shoes'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import JacketDetails from './data/JacketDetail'
import './styles/Global.css'
import Layout from './components/Layout'

function AnimateRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes
      location={location}
      key={location.pathname}
      >
        <Route path='/' element={<Home 
        />} />
        <Route path='/Collection' element={<Collection 
        />} />
        <Route path='/Trousers' element={<Trousers
        />} />
        <Route path='/Shirts' element={<Shirts
        />} />
        <Route path='/Shoes' element={<Shoes
        />} />
        <Route path='/Jackets' element={<Jackets
        />} />
        <Route path='/jackets/:id' element={<JacketDetails/>}/>
        <Route path='/About' element={<About 
        />} />
        <Route path='/Contact' element={<Contact 
        />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <>
    <Layout>
      <Navbar />
      <ScrollToTop />
      <AnimateRoutes />
    </Layout>
    </>
  )
}
