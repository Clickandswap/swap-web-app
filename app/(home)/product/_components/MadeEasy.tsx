"use client";

import React, { useLayoutEffect, useRef } from "react";
import { madeEasyCard } from "@/common/data/card";
import Button from "@/components/ui/Button";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin safely for Next.js client component
gsap.registerPlugin(ScrollTrigger);

interface CardItem {
  id: number;
  name: string;
  details: string;
  img_bg: string;
  img_path: string;
}

function MadeEasy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".gsap-card");
      
      // Loop through all cards except the first one and animate them sliding up from below
      cards.forEach((card: any, index: number) => {
        if (index === 0) return; // The first card stays visible by default

        gsap.fromTo(
          card,
          { yPercent: 100 }, // Starts completely off-screen below
          {
            yPercent: 0, // Slides up to fill the viewport frame exactly
            ease: "none",
            scrollTrigger: {
              trigger: triggerRef.current,
              start: () => `top+=${(index - 1) * window.innerHeight} top`,
              end: () => `top+=${index * window.innerHeight} top`,
              scrub: true, // Ties the animation directly to the speed of the mouse scroll
            },
          }
        );
      });

      // Pin the main container frame in place while the sub-cards carry out their animation tracks
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${(cards.length - 1) * 100}%`,
        pin: true, // LOCKS the parent section in place perfectly on screen
        scrub: true,
        invalidateOnRefresh: true,
      });
    }, containerRef);

    return () => ctx.revert(); // Clean up memory instances when page shifts
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* Dynamic Scrolling Container Bounds Tracking Node */}
      <div ref={triggerRef} className="relative w-full h-screen overflow-hidden bg-white">
        
        {madeEasyCard.map((item: CardItem, index: number) => (
          <div
            key={item.id}
            // gsap-card class handles array queries. 
            // The absolute inset-0 style puts them in a clean stack without creating empty vertical space voids.
            className="gsap-card absolute inset-0 w-full h-full flex lg:flex-row flex-col overflow-hidden sm:px-28 py-12"
            style={{ 
              zIndex: index,
              backgroundColor: item.id === 1 ? "#EEF9FF" : item.id === 2 ? "#FAFAFA" : "#FFFCF1"
            }}
          >
            {/* Left Column: Text Context Description */}
            <div className="lg:w-1/2 w-full p-8 md:p-20 lg:pt-32 flex items-center">
              <div>
                <h2 className="font-bold md:text-5xl text-3xl bg-linear-to-r from-dark to-gradient-dark-secondary bg-clip-text text-transparent pb-6">
                  Everything in one app
                </h2>
                <h3 className="font-bold font-space_grotesk text-3xl lg:text-4xl capitalize text-dark">
                  {item.name}
                </h3>
                <p className="text-base my-5 md:w-[65%] text-neutral-600 leading-relaxed">
                  {item.details}
                </p>
                <Button className="sm:w-1/2 w-full font-space_grotesk text-dark shadow-inner border border-primary">
                  Join the waitlist
                </Button>
              </div>
            </div>

            {/* Right Column: Background Graphic Illustration */}
            <div
              className="lg:w-1/2 w-full p-12 relative bg-no-repeat bg-cover bg-center flex items-center justify-center lg:h-full h-[45vh]"
              style={{ backgroundImage: `url(${item.img_bg})` }}
            >
              {item.id === 1 && (
                <Image
                  src={item.img_path}
                  width={400}
                  height={400}
                  className="w-auto h-auto max-h-[80%] object-contain lg:absolute bottom-10"
                  alt={`${item.name} Sample Image`}
                  priority
                />
              )}

              {item.id === 2 && (
                <Image
                  src={item.img_path}
                  width={200}
                  height={200}
                  className="w-auto h-auto max-h-[80%] object-contain lg:absolute -left-28 bottom-10 z-10"
                  alt={`${item.name} Sample Image`}
                />
              )}

              {item.id === 3 && (
                <Image
                  src={item.img_path}
                  width={200}
                  height={200}
                  className="w-auto h-auto max-h-[80%] object-contain"
                  alt={`${item.name} Sample Image`}
                />
              )}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default MadeEasy;
