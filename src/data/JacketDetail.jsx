import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Gallery.css"

export default function JacketDetails () {
  const { id } = useParams();

  const jacket = {
    id,
    name: "Painted Jacket",
    images: [
      "/images/images (3).jpeg",
      "/images/images (3).jpeg",
      "/images/images (3).jpeg",
      "/images/images (3).jpeg",
    ],

    story: "This shirt was inspired by street art and the flow of urban life.",

    process: [
      "/images/images (2).jpeg",
      "/images/images (2).jpeg",
      "/images/images (2).jpeg",
    ]
  };

  return (
    <main className="product-page">
      <h1>{jacket.name}</h1>

      <div className="product-gallery">
        {jacket.images.map((img, i) => (
          <img key={i} src={img} alt={`${jacket.name} view ${i + 1}`}/>
        ))}
      </div>

      <section className="product-process">
        <h2>How It Was Made</h2>
        <div className="process-grid">
          {jacket.process.map((step, i) => (
            <img key={i} src={step} alt={`Process step ${i + 1}`}/>
          ))}
        </div>
      </section>
    </main>
  );
}