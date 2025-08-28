import React from "react";
import Footer from '../pages/Footer';
import Navbar from './Navbar';
import PaintSpalshCavas from "./PaintSplashCanvas";

export default function 
Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
      <PaintSpalshCavas />
    </>
  )
}