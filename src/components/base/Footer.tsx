"use client";

import Link from "next/link";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            <span className="text-orange-500">Kala</span>kriti
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Empowering creativity, nurturing young talent, and preserving
            cultural values through art and literature.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#about" className="hover:text-orange-400">About</Link></li>
            <li><Link href="#programs" className="hover:text-orange-400">Programs</Link></li>
            <li><Link href="#events" className="hover:text-orange-400">Events</Link></li>
            <li><Link href="#contact" className="hover:text-orange-400">Contact</Link></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-white font-semibold mb-4">Programs</h3>
          <ul className="space-y-2 text-sm">
            <li>Poetry Gatherings</li>
            <li>Open Mic Events</li>
            <li>Theatre Performances</li>
            <li>Competitions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@kalakriti.org
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 9755852307, +91 8770647176
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/the_kalakriti_foundation?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==" className="hover:text-orange-400">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-orange-400">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} The Kalakriti Foundation. All rights reserved.
      </div>
    </footer>
  );
}