import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#062c22] text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Image
              src="/herosection/logo.png"
              alt="Bright Academy"
              width={140}
              height={40}
              className="mb-6 h-16 w-auto brightness-0 invert"
            />
            <p className="mb-6 text-sm leading-relaxed text-gray-300">
              Empowering students with personalized learning experiences and expert guidance to achieve their academic goals.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ef7200] text-sm font-bold transition hover:bg-[#d86500]"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ef7200] text-lg font-semibold transition hover:bg-[#d86500]"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ef7200] text-lg font-semibold transition hover:bg-[#d86500]"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ef7200] text-sm font-bold transition hover:bg-[#d86500]"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-300 transition hover:text-[#ef7200]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 transition hover:text-[#ef7200]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 transition hover:text-[#ef7200]">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 transition hover:text-[#ef7200]">
                  Results
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 transition hover:text-[#ef7200]">
                  Faculty
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 transition hover:text-[#ef7200]">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Our Programs</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-300 transition hover:text-[#ef7200]">
                  IIT-JEE Coaching
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 transition hover:text-[#ef7200]">
                  NEET Preparation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 transition hover:text-[#ef7200]">
                  Board Exam Classes
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 transition hover:text-[#ef7200]">
                  Foundation Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 transition hover:text-[#ef7200]">
                  Online Classes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-[#ef7200]" />
                <span className="text-sm text-gray-300">
                  123 Education Street, Learning City, ST 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-[#ef7200]" />
                <a href="tel:+1234567890" className="text-sm text-gray-300 transition hover:text-[#ef7200]">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#ef7200]" />
                <a href="mailto:info@brightacademy.com" className="text-sm text-gray-300 transition hover:text-[#ef7200]">
                  info@brightacademy.com
                </a>
              </li>
            </ul>
            
            <button className="mt-6 rounded-full bg-[#ef7200] px-6 py-2.5 text-sm font-semibold transition hover:bg-[#d86500]">
              Book a Free Demo 🌱
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="mx-auto max-w-[1400px] px-6 py-6 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              © 2024 Bright Academy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 transition hover:text-[#ef7200]">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 transition hover:text-[#ef7200]">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 transition hover:text-[#ef7200]">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
