"use client";

import { motion } from "framer-motion";

const programs = [
  { title: "All India Kavi Sammelan", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
    </svg>
  )},
  { title: "Poetry Gatherings", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2z" />
    </svg>
  )},
  { title: "Open Mic Events", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v11m0 0a3 3 0 003 3h0a3 3 0 003-3V1" />
    </svg>
  )},
  { title: "Theatre Performances", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
    </svg>
  )},
  { title: "School & College Competitions", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3 0-5 2-5 5v3h10v-3c0-3-2-5-5-5z" />
    </svg>
  )},
  { title: "Cultural & Literary Festivals", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M19 3v4M5 21v-6a6 6 0 0112 0v6" />
    </svg>
  )},
];

export default function ProgramsSection() {
  return (
    <section className="w-full py-24">
      <div className="container mx-auto px-6">
        
        {/* Top Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Empowering Young Talent
              <span className="text-orange-600 block">Across the Nation</span>
            </h2>

            <p className="mt-6 text-lg md:text-xl text-gray-700">
              One of the most distinctive aspects of our organization is our
              continuous effort to identify, nurture, and provide a strong
              platform for children and youth. Through our initiatives,
              thousands of students have discovered their voice, confidence,
              and creativity.
            </p>

            <p className="mt-4 text-gray-700 md:text-lg">
              With programs conducted in over <span className="font-semibold text-orange-600">400+ schools and colleges</span>,
              we are building a generation of expressive, confident, and culturally
              connected individuals.
            </p>
          </motion.div>

          {/* Right Programs Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {programs.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl shadow-lg transform hover:scale-[1.02] transition bg-gradient-to-br from-orange-50 to-rose-50 border border-transparent"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/90 flex items-center justify-center text-orange-600">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-orange-700 md:text-lg">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-semibold leading-relaxed">
            Every child carries a unique talent within. With the right guidance
            and opportunities, they can become a{" "}
            <span className="text-orange-600">
              source of inspiration for society
            </span>.
          </h3>

          <p className="mt-6 text-gray-600">
            At The Kalakriti Foundation, we are not just organizing events—we
            are creating platforms that bring people together, encourage
            cultural exchange, and inspire positive change through art and
            literature.
          </p>
        </motion.div>

      </div>
    </section>
  );
}