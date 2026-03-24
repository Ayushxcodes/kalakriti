"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-rose-50">
      
      {/* Background Blur Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-rose-300/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 text-center relative z-10">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
        >
          Empowering Creativity,  
          <span className="text-orange-600 block">
            Celebrating Culture
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600"
        >
          The Kalakriti Foundation is dedicated to nurturing young talent,
          promoting art & literature, and building a more aware, creative,
          and culturally enriched society.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="text-lg px-8 py-6">
            Explore Programs
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-orange-500 text-orange-600 hover:bg-orange-50"
          >
            Join Our Community
          </Button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
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
    </section>
  );
}