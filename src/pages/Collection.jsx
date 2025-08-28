import React from "react";
import { Link } from "react-router-dom";
import InfiniteCarousel from "../components/InfiniteCarousel.jsx";
import "../styles/Gallery.css";


export default function Collection() {
  const heroImages = [
    {
      src: "/images/images.jpeg",
      alt: "Shirt Art"
    },
    {
      src: "/images/images (2).jpeg",
      alt: "Jacket Art"
    },
    {
      src: "/images/images (3).jpeg",
      alt: "Shoe Art"
    },
    { src: "/images/example.jpg", alt: "Jeans Art" },
  ];

  const jackets = [
    {
    id: "jacket 1",
    name: " RockaFella",
    thumb: "/images/images (3).jpeg"
  },
  {
    id: "jacket 2",
    name: " Dope",
    thumb: "/images/images (3).jpeg"
  },
  {
    id: "jacket 3",
    name: " RockaFella",
    thumb: "/images/images (3).jpeg"
  },
  {
    id: "jacket 4",
    name: " RockaFella",
    thumb: "/images/images (3).jpeg"
  },
];

const jeans = [
    {
    id: "jean 1",
    name: " RockaFella",
    thumb: "/images/images (2).jpeg"
  },
  {
    id: "jean 2",
    name: " Dope",
    thumb: "/images/images (2).jpeg"
  },
  {
    id: "jean 3",
    name: " RockaFella",
    thumb: "/images/images (2).jpeg"
  },
  {
    id: "jean 4",
    name: " RockaFella",
    thumb: "/images/images (2).jpeg"
  },
];

const shirts = [
    {
    id: "shirt 1",
    name: " RockaFella",
    thumb: "/images/images.jpeg"
  },
  {
    id: "shirt 2",
    name: " Dope",
    thumb: "/images/images.jpeg"
  },
  {
    id: "shirt 3",
    name: " RockaFella",
    thumb: "/images/images.jpeg"
  },
  {
    id: "shirt 4",
    name: " RockaFella",
    thumb: "/images/images.jpeg"
  },
];

const shoes = [
    {
    id: "shoe 1",
    name: " RockaFella",
    thumb: "/images/example.jpg"
  },
  {
    id: "shoe 2",
    name: " Dope",
    thumb: "/images/example.jpg"
  },
  {
    id: "shoe 3",
    name: " RockaFella",
    thumb: "/images/example.jpg"
  },
  {
    id: "shoe 4",
    name: " RockaFella",
    thumb: "/images/example.jpg"
  },
];

  return (
    <main
    className="collection-page">
      <header className="collection-hero">
        <h2 className="fade-in">Collection</h2>
        <p className="muted fade-in delay-1">
          Four canvases. One vision - your story in motion.
        </p>
        <InfiniteCarousel images={heroImages} speed={70} />
        <nav className="collection-nav fade-in delay-2">
          <Link className='pill' to='/'>←</Link>
          <Link className="pill" to="/Jackets">Jackets</Link>
          <Link className="pill" to="/Jeans">Jeans</Link>
          <Link className="pill" to="/Shirts">Shirts</Link>
          <Link className="pill" to="/Shoes">Shoes</Link>
        </nav>
      </header>
      <section className="section-page">
        <header className="section-hero__head">
          <h2>Jackets</h2>
          <p className="muted">
            Hand-painted stories you can wear.
          </p>
        </header>
      </section>
      <section className="collection-grid">
        {jackets.map((jacket) => (
          <Link key={jacket.id} 
          to={`/Jackets/${jacket.id}`}
          className="collection-tile">
            <img src={jacket.thumb} alt={jacket.name}/>
          </Link>
        ))}
      </section>
      <div className="centered">
        <Link className="pill" to="/Jackets">Load More</Link>
      </div>

       <section className="section-page">
        <header className="section-hero__head">
          <h2>Jeans</h2>
          <p className="muted">
            Hand-painted stories you can wear.
          </p>
        </header>
      </section>
      <section className="collection-grid">
        {jeans.map((jean) => (
          <Link key={jean.id} 
          to={`/Trousers/${jean.id}`}
          className="collection-tile">
            <img src={jean.thumb} alt={jean.name}/>
          </Link>
        ))}
      </section>
      <div className="centered">
        <Link className="pill" to="/Trousers">Load More</Link>
      </div>

      <section className="section-page">
        <header className="section-hero__head">
          <h2>Shirts</h2>
          <p className="muted">
            Hand-painted stories you can wear.
          </p>
        </header>
      </section>
      <section className="collection-grid">
        {shirts.map((shirt) => (
          <Link key={shirt.id} 
          to={`/Shirts/${shirt.id}`}
          className="collection-tile">
            <img src={shirt.thumb} alt={shirt.name}/>
          </Link>
        ))}
      </section>
      <div className="centered">
        <Link className="pill" to="/Shirts">Load More</Link>
      </div>

      <section className="section-page">
        <header className="section-hero__head">
          <h2>Shoes</h2>
          <p className="muted">
            Hand-painted stories you can wear.
          </p>
        </header>
      </section>
      <section className="collection-grid">
        {shoes.map((shoe) => (
          <Link key={shoe.id} 
          to={`/Shoes/${shoe.id}`}
          className="collection-tile">
            <img src={shoe.thumb} alt={shoe.name}/>
          </Link>
        ))}
      </section>
      <div className="centered">
        <Link className="pill" to="/Shoes">Load More</Link>
      </div>

      <section className="cta fade-in delay-1">
        <h2>Ready to Create Your Piece?</h2>
        <button className="primary-btn">
          Book a Consultation
        </button>
      </section>
    </main>
  );
}