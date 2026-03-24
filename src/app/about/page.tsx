"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="text-gray-800">

      {/* HERO (uses global background) */}
      <section className="relative py-28 text-center overflow-hidden pt-20 md:pt-28">
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            कला से संवाद,
            <span className="text-orange-600 block">संस्कृति से पहचान</span>
          </motion.h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            The Kalakriti Foundation is more than an organization — it is a
            movement to revive expression, empower youth, and connect society
            through the timeless power of art and literature.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Text (moves to right on md) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:order-2 md:text-right"
          >
            <h2 className="text-3xl md:text-6xl font-bold">
              Our Story
            </h2>

            <p className="mt-6 text-gray-600 md:text-xl leading-relaxed">
              The Kalakriti Foundation was built on a simple yet powerful idea —
              that every individual carries a story, a voice, and a creative spark
              waiting to be expressed.
            </p>

            <p className="mt-4 text-gray-600 md:text-lg leading-relaxed">
              With a deep respect for Indian culture and a vision for the future,
              we have created platforms where art meets opportunity. From poetry
              to theatre, from classrooms to grand stages, we bring creativity
              to life.
            </p>
          </motion.div>

          {/* Image tiles (moves left on md) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 gap-6 md:order-1"
          >
            {[
              { img: "/slide14.jpeg", value: "", label: "" },
              { img: "/slide18.jpeg", value: "", label: "" },
              { img: "/slide20.jpeg", value: "", label: "" },
              { img: "/slide17.jpeg", value: "", label: "" },
            ].map((tile, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden shadow-md">
                <img src={tile.img} alt={tile.label} className="w-full h-48 md:h-56 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute left-4 bottom-4 text-left">
                  <h3 className="text-2xl font-bold text-white">{tile.value}</h3>
                  <p className="text-sm text-white/90 mt-1">{tile.label}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Our Philosophy
          </motion.h2>

          <p className="mt-8 text-lg text-gray-300 leading-relaxed">
            We believe that art is not just expression—it is transformation.
            When a child steps onto a stage, speaks their truth, or shares their
            creativity, something powerful happens.
          </p>

          <p className="mt-4 text-gray-400">
            Confidence is built. Voices are heard. Society becomes more aware,
            more sensitive, and more connected.
          </p>

        </div>
      </section>

      {/* PROGRAMS */}
     
      {/* CLOSING */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 max-w-3xl">

          <h2 className="text-3xl md:text-5xl font-bold">
            A Movement, Not Just an Organization
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            We are shaping a future where every voice matters, every talent is
            nurtured, and every individual gets the opportunity to shine.
          </p>

        </div>
      </section>

    </main>
  );
}