"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useRef } from "react";

const images = [
  "slide14.jpeg",
  "slide15.jpeg",
  "slide16.jpeg",
  "slide17.jpeg",
  "slide18.jpeg",
  "slide19.jpeg",
  "slide20.jpeg",
];

export default function ShowcaseSection() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [plugin.current]
  );

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold">
            Moments That Inspire
          </h2>
          <p className="text-gray-600 mt-3">
            A glimpse into our cultural and creative journey
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden rounded-3xl shadow-xl" ref={emblaRef}>
          <div className="flex">
            {images.map((src, index) => (
              <div
                key={index}
                className="min-w-full relative h-[300px] md:h-[800px]"
              >
                <Image
                  src={src.startsWith("/") ? src : `/${src}`}
                  alt={`Slide ${index}`}
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-end p-6 md:p-10">
                  <h3 className="text-white text-xl md:text-3xl font-semibold">
                    Celebrating Creativity & Culture
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}