import React from 'react';
import { Link } from 'react-router-dom';
import InfiniteCarousel from '../components/InfiniteCarousel';
import InfinteGrid from '../components/InfiniteGrid';
import '../styles/Gallery.css';

export default function SectionTemplate({
  title, heroImages, items }) {
    return (
      <main className='section-page'>
        <header className='section-hero'>
          <div className='section-hero__head'>
            <h1 className='fade-in'>{title}</h1>
            <p className='muted fade-in delay-1'>
              Every piece carries a story -painted by hand, guided by your vision.
            </p>
          </div>
          <InfiniteCarousel images={heroImages} speed={65} />
          <nav className='section-nav fade-in delay-2'>
            <Link className='pill' to='/'>←</Link>
            <Link className='pill' to='/Collection'>Collection</Link>
          </nav>
        </header>

        <section className='section-catalog'>
          <h2 className='fade-in'>Explore {title}</h2>
          <p className='muted fade-in delay-1'>
            Scroll to reveal more - the catalogue is infinite so your inspiration never runs out.
          </p>
          <InfinteGrid initialItems={items} batchSize={12} masonry />
        </section>
      </main>
    );
}