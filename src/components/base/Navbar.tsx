"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/favicon_io/favicon-32x32.png"
            alt="Kalakriti logo"
            className="w-8 h-8 rounded"
          />
          <span className="text-xl font-bold tracking-tight">
            The <span className="text-orange-600">Kala</span>kriti
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-orange-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-orange-600 transition">
            About
          </Link>
          <Link href="/events" className="hover:text-orange-600 transition">
            Events
          </Link>
          <Link href="/contact" className="hover:text-orange-600 transition">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="bg-orange-600 hover:bg-orange-700">Join Us</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
           
            <Link href="/events" onClick={() => setOpen(false)}>
              Events
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link href="/contact">
              <Button className="mt-2 bg-orange-600 hover:bg-orange-700">Join Us</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}