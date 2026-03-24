"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const router = useRouter();
  const images = [
    "/slide1.jpeg",
    "/slide2.jpeg",
    "/slide3.jpeg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Blur Elements (moved to global layout) */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Left: content */}
          <div className="w-full md:w-1/2 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
            >
              Empowering Creativity,
              <span className="text-orange-600 block">Celebrating Culture</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-6 max-w-xl text-lg md:text-xl text-gray-600"
            >
              The Kalakriti Foundation is dedicated to nurturing young talent,
              promoting art & literature, and building a more aware, creative,
              and culturally enriched society.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => router.push('/events')}>
                Explore Programs
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-orange-500 text-orange-600 hover:bg-orange-50"
                onClick={() => router.push('/contact')}
              >
                Join Our Community
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl"
            >
              <div>
                <h3 className="text-3xl font-bold text-orange-600">400+</h3>
                <p className="text-gray-600 mt-1">Schools & Colleges</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-orange-600">10K+</h3>
                <p className="text-gray-600 mt-1">Students Impacted</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-3xl font-bold text-orange-600">100+</h3>
                <p className="text-gray-600 mt-1">Cultural Events</p>
              </div>
            </motion.div>
          </div>

          {/* Right: square image frame */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="w-72 h-72 md:w-140 md:h-140 rounded-xl overflow-hidden relative shadow-lg bg-transparent">
              {images.map((src, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundImage: `url(${src})` }}
                  aria-hidden
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}