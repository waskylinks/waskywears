import React, { useCallback, useEffect, useRef, useState } from "react";
import '../styles/Gallery.css';

export default function InfiniteGrid({
  initialItems = [],
  batchSize = 12,
  masonry = true,
}) {
  const [items, setItems] = useState(initialItems.slice(0, batchSize));
  const [index, setIndex] = useState(batchSize);
  const sentinelRef = useRef(null);

  const loadMore = useCallback(() => {
    if (index >= initialItems.length)
      return ;
    const nextBatch = initialItems.slice(index, index + batchSize);
    setItems((prev) => [...prev, ...nextBatch]);
    setIndex((i) => i + nextBatch.length);
  }, [batchSize, initialItems, index]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if(e.isIntersecting)
            loadMore();
        });
      },
      { rootMargin: '800px 0px 800px 0px'} //prefetch before reaching bottom
    );

    io.observe(sentinel);
    return () => io.disconnect();
  }, [loadMore]);

  return (
    <>
      <div className={`galllery-grid ${masonry} ? "gallery-grid--masonry" : ""`}>
        {items.map((it, idx) => (
          <figure
          className="gallery-card fade-in"
          key={`${it.id}-${idx}`}>
            <img src={it.src}
            alt={it.title} 
            loading="lazy"/>
            <figcaption>
              <h3>{it.title}</h3>
              <p>{it.story}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div ref={sentinelRef} className="gallery-sentinel" aria-label="true"/>
    </>
  );
}