"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";

const team = [
  {
    name: "Priyanshu mishra",
    role: "Founder & Director",
    image: "/priyanshu.jpeg",
  },
  {
    name: "Swaraj dhar Dwivedi",
    role: "Co-Founder",
    image: "/co_founder.jpeg",
  },
  {
    name: "Amit Shukla",
    role: "Member",
    image: "/member2.jpeg",
  },
  {
    name: "Arunima pathak",
    role: "Member",
    image: "/member3.jpeg",
  },
  {
    name: "Arunendra singh chauhan",
    role: "Member",
    image: "/member4.jpeg",
  },
   {
    name: "Harsh pandey",
    role: "Member",
    image: "/member5.jpeg",
  },
  {
    name: "Atul upadhyay",
    role: "Member",
    image: "/member6.jpeg",
  },
  {
    name: "Brijesh singh",
    role: "Member",
    image: "/member7.jpeg",
  },
  {
    name: "Neeraj nirmohi",
    role: "Member",
    image: "/member8.jpeg",
  },
  {
    name: "Kaamta makhan",
    role: "Member",
    image: "/member9.jpeg",
  },
  {
    name: "Akansha tripathi",
    role: "Member",
    image: "/member10.jpeg",
  },
];

export default function TeamPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="py-24 text-center bg-gradient-to-br from-orange-50 via-white to-rose-50">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Meet Our Team
          </motion.h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            The passionate individuals behind The Kalakriti Foundation,
            working to empower creativity and build a culturally enriched society.
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden shadow-md border hover:shadow-xl transition"
              >
                
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
  <Image
    src={member.image}
    alt={member.name}
    fill
    className="object-cover object-top group-hover:scale-105 transition duration-500"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
    <Instagram className="text-white cursor-pointer" />
    <Linkedin className="text-white cursor-pointer" />
  </div>
</div>
                {/* Info */}
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-lg">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {member.role}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* FOUNDER HIGHLIGHT */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              A Vision That Inspires
            </h2>

            <p className="mt-6 text-gray-300">
              Our foundation is built on the belief that every individual has
              the power to express, inspire, and transform society through art.
            </p>

            <p className="mt-4 text-gray-400">
              With dedication and passion, our leadership continues to create
              opportunities for young minds to discover their true potential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/priyanshu.jpeg"
              alt="Founder"
              fill
              className="object-cover"
            />
          </motion.div>

        </div>
      </section>

    </main>
  );
}