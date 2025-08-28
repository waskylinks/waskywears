import React from "react";
import SectionTemplate from "./SectionTemplate";


const heroImages = [
  { src: "/images/example.jpg", alt: "Jeans Art 1" },
  { src: "/images/images.jpeg", alt: "Jeans Art 2" },
  { src: "/images/images (2).jpeg", alt: "Jeans Art 3" },
  { src: "/images/images (3).jpeg", alt: "Jeans Art 4" },
];

const items = [
  {
    id: "j1",
    src: "/images/example.jpg",
    title: "Edge of Canvas",
    story: "Graffitted hems and brushdtroke shoulders - rebellion tailored."
  },
  {
    id: "j2",
    src: "/images/images (3).jpeg",
    title: "Edge of Canvas",
    story: "Graffitted hems and brushdtroke shoulders - rebellion tailored."
  },
  {
    id: "j3",
    src: "/images/images.jpeg",
    title: "Edge of Canvas",
    story: "Graffitted hems and brushdtroke shoulders - rebellion tailored."
  },
  {
    id: "j4",
    src: "/images/images (2).jpeg",
    title: "Edge of Canvas",
    story: "Graffitted hems and brushdtroke shoulders - rebellion tailored."
  },
]

export default function Jackets() {
  return <SectionTemplate 
  title="Jackets"
  heroImages={heroImages}
  items={items}/>;
}