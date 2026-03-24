"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function EventsComingSoon() {
  const router = useRouter();
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-rose-50 relative overflow-hidden">

      {/* Background Blurs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-rose-300/30 rounded-full blur-3xl" />

      <div className="text-center px-6 max-w-2xl relative z-10">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Events Are Coming Soon 🎭
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-600"
        >
          We are preparing something inspiring for you.  
          Stay tuned for cultural events, poetry, theatre, and more.
        </motion.p>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 italic text-gray-500"
        >
          “Every stage is waiting for a story to be told.”
        </motion.p>

        {/* Notify Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Input
            placeholder="Enter your email"
            className="max-w-xs"
          />
          <Button className="bg-orange-600 hover:bg-orange-700">
            Notify Me
          </Button>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6"
        >
          <Button
            variant="ghost"
            className="text-gray-600"
            onClick={() => router.push('/')}
          >
            ← Back to Home
          </Button>
        </motion.div>

      </div>
    </main>
  );
}