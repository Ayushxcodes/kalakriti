"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const gallery = [
  {
    title: "Event Highlights",
    images: [
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
      
    ],
  },
  {
    title: "workshops",
    images: [
      "/events/workshops/w1.jpeg",
      "/events/workshops/w2.jpeg",
      "/events/workshops/w3.jpeg",
      "/events/workshops/w4.jpeg",
      "/events/workshops/w5.jpeg",
      "/events/workshops/w6.jpeg",
      "/events/workshops/w7.jpeg",
      "/events/workshops/w8.jpeg",
      "/events/workshops/w9.jpeg",
      "/events/workshops/w10.jpeg",
      "/events/workshops/w11.jpeg",
      "/events/workshops/w12.jpeg",
      "/events/workshops/w13.jpeg",
      "/events/workshops/w14.jpeg",
      "/events/workshops/w15.jpeg",
      "/events/workshops/w16.jpeg",
      "/events/workshops/w17.jpeg",
      "/events/workshops/w18.jpeg",
      "/events/workshops/w19.jpeg",
      "/events/workshops/w20.jpeg",
      "/events/workshops/w21.jpeg",
      "/events/workshops/w22.jpeg",
      "/events/workshops/w23.jpeg",
      "/events/workshops/w24.jpeg",
      "/events/workshops/w25.jpeg",
      "/events/workshops/w26.jpeg",
      "/events/workshops/w27.jpeg",
      "/events/workshops/w28.jpeg",
      "/events/workshops/w29.jpeg",
      "/events/workshops/w30.jpeg",
      "/events/workshops/w31.jpeg",
      "/events/workshops/w32.jpeg",
      "/events/workshops/w33.jpeg",
      "/events/workshops/w34.jpeg",
      "/events/workshops/w35.jpeg",
      "/events/workshops/w36.jpeg",
      "/events/workshops/w37.jpeg",
      "/events/workshops/w38.jpeg",
      "/events/workshops/w39.jpeg",
      "/events/workshops/w40.jpeg",
      "/events/workshops/w41.jpeg",
      "/events/workshops/w42.jpeg",
      "/events/workshops/w43.jpeg",
      "/events/workshops/w44.jpeg",
      "/events/workshops/w45.jpeg",    
    ],
  },
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

      {/* CATEGORY SECTIONS */}
      {gallery.map((category, index) => (
        <section key={index} className="py-16 px-6 container mx-auto">

          <h2 className="text-2xl font-semibold mb-8">
            {category.title}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {category.images.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-md"
              >

                <div className="relative aspect-video">
                  <Image
                    src={src}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

              </motion.div>
            ))}

          </div>

        </section>
      ))}

    </main>
  );
}