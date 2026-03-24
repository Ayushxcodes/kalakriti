"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
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
            Get in Touch
          </motion.h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have a question, idea, or want to collaborate?  
            We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section>
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-lg border"
          >
            <h2 className="text-2xl font-semibold mb-6">
              Send a Message
            </h2>

            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" className="min-h-[120px]" />

              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center gap-6"
          >
            
            <div className="flex items-start gap-4 p-6 rounded-2xl border shadow-sm">
              <Mail className="text-orange-600" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600 text-sm">
                  info@kalakriti.org
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl border shadow-sm">
              <Phone className="text-orange-600" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600 text-sm">
                  +91 9755852307,
                  +91 8770647176
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl border shadow-sm">
              <MapPin className="text-orange-600" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600 text-sm">
                  Madhya Pradesh, India
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* OPTIONAL MAP */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border">
            <iframe
              src="https://maps.google.com/maps?q=Madhya%20Pradesh&t=&z=5&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

    </main>
  );
}