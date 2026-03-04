import React, { useRef, useState, useCallback, useEffect } from 'react';
import PoemCard from './PoemCard';

const PoemExplorer = React.memo(({ poems }) => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleDots = 5;

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.offsetWidth);
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
      }
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  const startDot = Math.max(0, Math.min(currentIndex - Math.floor(visibleDots / 2), poems.length - visibleDots));
  const dots = [];
  for (let i = startDot; i < Math.min(startDot + visibleDots, poems.length); i++) {
    dots.push(i);
  }

  return (
    <div className="explore-tab">
      <div className="poem-explorer" ref={scrollRef}>
        {poems.map((poem, index) => (
          <div className="poem-explorer-slide" key={index}>
            <PoemCard title={poem.title} poem={poem.poem} author={poem.author} />
          </div>
        ))}
      </div>
      <div className="explorer-dots">
        {dots.map((i) => (
          <div
            key={i}
            className={`explorer-dot${i === currentIndex ? ' active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
});

export default PoemExplorer;
