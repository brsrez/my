import React, { useRef } from "react";

const GlowCard = ({ children, review, className = "" }) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;

    const dx = x - rect.width / 2;
    const dy = y - rect.height / 2;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    glow.style.background = `radial-gradient(200px circle at ${px}% ${py}%, rgba(255,255,255,0.15), rgba(255,255,255,0) 40%)`;
    card.style.setProperty("--start", (angle + 60).toFixed(2));
  };

  const handleMouseLeave = () => {
    const glow = glowRef.current;
    if (glow) glow.style.background = "transparent";
  };

  return (
    <div
      ref={cardRef}
      className={`card card-border timeline-card rounded-xl p-10 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="glow" ref={glowRef} />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="size-5" />
        ))}
      </div>

      {review && (
        <div className="mb-5">
          <p className="text-white-50 text-lg">{review}</p>
        </div>
      )}

      {children}
    </div>
  );
};

export default GlowCard;
