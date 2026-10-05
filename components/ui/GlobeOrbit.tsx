"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useAnimationFrame } from "framer-motion";

/**
 * Everything is positioned in a 0-100 coordinate space so it scales
 * with the container. Each orbit is an ellipse centred on the globe.
 */
type Orbit = {
  rx: number; // horizontal radius
  ry: number; // vertical radius
  tilt: number; // rotation in degrees
  dashed: boolean;
};

const orbits: Orbit[] = [
  { rx: 48, ry: 17, tilt: -18, dashed: false }, // solid white path
  { rx: 46, ry: 30, tilt: 38, dashed: true },
  { rx: 49, ry: 24, tilt: -52, dashed: true },
];

type OrbitCard = {
  id: number;
  orbit: number; // index in `orbits`
  start: number; // starting angle in degrees
  speed: number; // degrees per second (negative = other direction)
  title: string;
  text: string;
  avatar: string;
};

const cards: OrbitCard[] = [
  {
    id: 1,
    orbit: 0,
    start: 20,
    speed: 14,
    title: "They get ₦2,640",
    text: "Nigeria · local currency",
    avatar: "/globe_avatars/profile_pic_4.webp",
  },
  {
    id: 2,
    orbit: 1,
    start: 140,
    speed: 10,
    title: "Transaction Successful",
    text: "You just successfully sent XOF 20,000",
    avatar: "/globe_avatars/profile_pic_3.webp",
  },
  {
    id: 3,
    orbit: 2,
    start: 250,
    speed: -12,
    title: "Transaction Successful",
    text: "You just successfully sent NGN20,000",
    avatar: "/globe_avatars/profile_pic_2.webp",
  },
  {
    id: 4,
    orbit: 1,
    start: 320,
    speed: 10,
    title: "Transaction Successful",
    text: "You just successfully sent GHS2000",
    avatar: "/globe_avatars/profile_pic_1.webp",
  },
];

const MIN_SCALE = 0.5; // size when a card is on the far side

export default function GlobeOrbit() {
  const boxRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  // cached sizes (px) so we don't measure the DOM on every frame
  const dims = useRef({ w: 0, cardW: [] as number[], cardH: [] as number[] });
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const box = boxRef.current;
    if (!box) return;

    const measure = () => {
      dims.current.w = box.clientWidth;
      dims.current.cardW = cardRefs.current.map((el) => el?.offsetWidth ?? 0);
      dims.current.cardH = cardRefs.current.map((el) => el?.offsetHeight ?? 0);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(box);
    return () => ro.disconnect();
  }, []);

  // runs every frame; writes styles straight to the DOM (no React re-renders)
  useAnimationFrame((time) => {
    const seconds = reduceMotion.current ? 0 : time / 1000;
    const { w, cardW, cardH } = dims.current;

    cards.forEach((card, i) => {
      const el = cardRefs.current[i];
      if (!el) return;

      const { rx, ry, tilt } = orbits[card.orbit];
      const t = ((card.start + card.speed * seconds) * Math.PI) / 180;
      const rot = (tilt * Math.PI) / 180;

      // point on the ellipse, then rotate by the tilt
      const ex = rx * Math.cos(t);
      const ey = ry * Math.sin(t);
      let x = 50 + ex * Math.cos(rot) - ey * Math.sin(rot);
      let y = 50 + ex * Math.sin(rot) + ey * Math.cos(rot);

      // depth: 1 at the front (bottom of the ellipse), 0 at the back (top)
      const depth = (Math.sin(t) + 1) / 2;
      const scale = MIN_SCALE + (1 - MIN_SCALE) * depth;

      // keep the whole card inside the box so it never gets cut off on small screens
      if (w) {
        const halfX = ((cardW[i] * scale) / 2 / w) * 100;
        const halfY = ((cardH[i] * scale) / 2 / w) * 100;
        x = Math.min(100 - halfX, Math.max(halfX, x));
        y = Math.min(100 - halfY, Math.max(halfY, y));
      }

      el.style.left = `${x}%`;
      el.style.top = `${y}%`;
      el.style.transform = `translate(-50%, -50%) scale(${scale})`;
      el.style.zIndex = `${Math.round(depth * 10) + 10}`;
    });
  });

  return (
    <div
      ref={boxRef}
      className="relative mx-auto aspect-square w-full max-w-190"
      // lets the cards size themselves from the box width (cqw) instead of the screen
      style={{ containerType: "inline-size" }}
    >
      {/* globe video (black background blends into the page) */}
      <video
        className="absolute inset-0 m-auto z-5 h-[94%] w-[94%] object-cover mix-blend-screen"
        src="/landing_page/earth_globe_rotating.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* orbit lines */}
      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 z-6 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        {orbits.map((o, i) => (
          <ellipse
            key={i}
            cx={50}
            cy={50}
            rx={o.rx}
            ry={o.ry}
            transform={`rotate(${o.tilt} 50 50)`}
            stroke="white"
            strokeOpacity={o.dashed ? 0.55 : 0.95}
            strokeWidth={o.dashed ? 1 : 1.5}
            strokeDasharray={o.dashed ? "6 5" : undefined}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* cards travelling along the orbits */}
      {cards.map((card, i) => (
        <div
          key={card.id}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
          className="absolute flex items-center rounded-lg text-dark shadow-lg will-change-transform"
          style={{
            left: "50%",
            top: "50%",
            // sizes follow the box width: compact on phones, full size on desktop
            width: "min(46cqw, 260px)",
            gap: "clamp(6px, 1.6cqw, 10px)",
            padding: "clamp(6px, 1.6cqw, 10px) clamp(8px, 2cqw, 14px)",
          }}
        >
          <Image
            src={card.avatar}
            alt={`avatars_${card.id}`}
            width={60}
            height={60}
            className="shrink-0 rounded-full object-cover"
            style={{
              width: "clamp(40px, 10cqw, 56px)",
              height: "clamp(40px, 10cqw, 56px)",
            }}
          />
          <div className="min-w-0 bg-white p-2 rounded-md">
            <p
              className="font-semibold leading-tight"
              style={{ fontSize: "clamp(10px, 2.3cqw, 14px)" }}
            >
              {card.title}
            </p>
            <p
              className="leading-snug text-gray-500"
              style={{ fontSize: "clamp(8px, 1.8cqw, 12px)" }}
            >
              {card.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
