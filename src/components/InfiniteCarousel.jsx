import React, { useEffect, useRef } from "react";
import "../styles/Gallery.css";

export default function InfiniteCarousel({
  images = [],
  speed = 60,
  height = "min(48vh, 520px)",
  pauseOnHover = true,
}) {
  const trackRef = useRef(null);

  const reel = [...images, ...images];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth / 2;
    const duration = totalWidth / speed;

    track.style.setProperty("--reel-duration", `${duration}s`);
  }, [images, speed]);

  return (
    <div
    className={`carousel ${pauseOnHover ? "carousel--hover--pause" : ""}`}
    style={{ "--carousel-h": height }}
    >
      <div
      ref={trackRef}
      className="carousel__track">
        {reel.map((img, i) => (
          <div
          className="carousel__item"
      key={`${img.src}-${i}`}>
        <img src={img.src}
        alt={img.alt || "gallery"} 
        loading="lazy" />
          </div>
        ))}
      </div>
      <div className="carousel__gradient carousel__gradient--left"/>
      <div className="carousel__gradient carousel__gradient--right"/>
    </div>
  );
}