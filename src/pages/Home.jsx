import React from "react";
import '../styles/Home.css'
import FadeInEffect from '../components/FadeInEffect';
import HeroParallax from '../components/HeroParallax';
import SmoothScroll from '../components/SmoothScroll';

export default function Home() {
  return (
    <>
      
      <FadeInEffect />
      <HeroParallax />
      <SmoothScroll />

      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay">
          <h1 className="fade-in">Your Vision. <span className="x">Our Craft.</span></h1>
          <p className="fade-in">
            Transforming your ideas into personalised jackets, shirts, shoes, and jeans - each piece a unique work of art.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">
              Start Your Design 
            </button>
            <button className="secondary-btn">Explore Our Creations</button>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-text">
          <h2>More Than Clothing - Wearable Art</h2>
          <p>
            Every gament is a collaboration between your imagination and our craftsmanship. We bring your ideas to life in garments that are both personal and timeless.
          </p>
        </div>
        <div className="about-image fade-in delay-1">
          <img src="/images/images.jpeg" loading="lazy" alt="Designer at work" />
        </div>
      </section>

      <section className="services">
        <h2 className="fade-in">Our Customisations</h2>
        <div className="service-grid">
          <div className="service-card fade-in delay-1">
            <img src="/images/images (2).jpeg" alt="Custom Jacket" loading="lazy"/>
            <h3>Jackets</h3>
            <p>
              Statement piece designed for you.
            </p>
          </div>
          <div className="service-card fade-in delay-2">
            <img src="/images/images (3).jpeg" alt="Custom Shoe" loading="lazy"/>
            <h3>Shoes</h3>
            <p>
              From sketch to step.
            </p>
          </div>
          <div className="service-card fade-in delay-3">
            <img src="/images/images.jpeg" alt="Custom Jeans" loading="lazy"/>
            <h3>Jeans</h3>
            <p>
              Fit, comfort, and your creative touch.
            </p>
          </div>
          <div className="service-card fade-in delay-4">
            <img src="/images/example.jpg" alt='Custom Shirts' loading="lazy"/>
            <h3>Shirts</h3>
            <p>
              Elegant design with personal details
            </p>
          </div>
        </div>
      </section>
      

      {/*Process section */}
      <section className="process">
        <h2 className="fade-in">Our Process</h2>
        <div className="process-steps">
          <div className="step fade-in delay-1">
          <span>1</span>
          <p>Consultation - Share your vision.</p>
        </div>
        <div className="step fade-in delay-2">
          <span>2</span>
          <p>Design Concept - Sketches from your idea.</p>
        </div>
        <div className="step fade-in delay-3">
          <span>3</span>
          <p>Material Selection - Feel and select fabrics.</p>
        </div>
        <div className="step fade-in delay-4">
          <span>4</span>
          <p>Crafting - Handcrafted with precision.</p>
        </div>
        <div className="step fade-in delay-5">
          <span>5</span>
          <p>Final fitting - Your art, ready to wear.</p>
        </div>
        </div>
      </section>

      <section className="cta fade-in delay-1">
        <h2>Ready to Create Your Piece?</h2>
        <button className="primary-btn">
          Book a Consultation
        </button>
      </section>
      <>
      </>
    </>
  );
}