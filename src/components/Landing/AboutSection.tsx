"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full min-h-[80vh] py-20 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:order-2 md:text-right"
          >
            <h2 className="text-3xl md:text-6xl font-bold leading-tight">
              Nurturing Talent,  
              <span className="text-orange-600 block">
                Preserving Culture
              </span>
            </h2>

            <p className="mt-6 text-lg md:text-2xl text-gray-600">
              The Kalakriti Foundation is a cultural, literary, and educational
              organization dedicated to empowering individuals through art.
              We aim to build a society that is aware, creative, and deeply
              connected to its cultural roots.
            </p>

            <p className="mt-4 text-gray-600 md:text-xl">
              From poetry and theatre to open mic platforms, we create
              opportunities for students and artists to express themselves,
              grow in confidence, and become voices of change.
            </p>
          </motion.div>

          {/* Right: four image tiles (swapped to left on md via order) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6 md:order-1"
          >
            {[
              { img: "/slide5.jpeg", value: "400+", label: "Schools & Colleges" },
              { img: "/slide6.jpeg", value: "10,000+", label: "Students Empowered" },
              { img: "/slide7.jpeg", value: "100+", label: "Cultural Events" },
              { img: "/slide8.jpeg", value: "∞", label: "Creative Opportunities" },
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

      </div>
    </section>
  );
}