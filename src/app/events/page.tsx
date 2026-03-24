"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/events/event1.jpeg",
  "/events/event2.jpeg",
  "/events/event3.jpeg",
  "/events/event4.jpeg",
  "/events/event5.jpeg",
  "/events/event6.jpeg",
  "/events/event7.jpeg",
  "/events/event8.jpeg",
  "/events/event9.jpeg",
  "/events/event10.jpeg",
  "/events/event11.jpeg",
  "/events/event12.jpeg",
  "/events/event13.jpeg",
  "/events/event14.jpeg",
  "/events/event15.jpeg",
  "/events/event16.jpeg",
  "/events/event17.jpeg",
  "/events/event18.jpeg",
  "/events/event19.jpeg",
  "/events/event20.jpeg",
  "/events/event21.jpeg",
  "/events/event22.jpeg",
];

export default function EventsGallery() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="py-20 text-center bg-gradient-to-br from-orange-50 via-white to-rose-50">
        <h1 className="text-4xl md:text-6xl font-bold">
          Our Events
        </h1>
        <p className="mt-4 text-gray-600">
          Capturing moments of creativity and expression
        </p>
      </section>

      {/* GRID */}
      <section className="py-16 px-6 container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              
              {/* Image Frame */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={src}
                  alt="Event"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <p className="text-white text-sm">
                  Cultural Event
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </section>

    </main>
  );
}