import { useState } from "react";
import { Menu, X } from "lucide-react";
// import logo from "../assets/UMMEED_logo.png";
import logo from "../assets/UMMEED_logo.png";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Causes", path: "/causes" },
  { name: "Events", path: "/events" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">

      {/* TOP BAR */}
      <div className="bg-[#1f1f1f] text-white">
        <div className="max-w-7xl mx-auto px-4 py-1 md:py-3 flex items-center justify-between gap-6 flex-wrap">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Ummeed Logo"
              className="h-12 w-auto  bg-white p-1"
            />
          </div>

          {/* Info */}
          <div className="hidden lg:flex items-center gap-10 text-sm">
            <Info icon="📞" title="Phone Number" value="+91 8127239729" />
            <Info icon="✉️" title="Email Address" value="ummeedwelfare.org.in@gmail.com" />
            <Info icon="📍" title="Our Location" value="Lucknow, IN" />
          </div>

          {/* CTA */}
          <button className="bg-yellow-500 hover:bg-yellow-600 rounded-2xl text-black px-6 py-2 font-semibold transition">
            CONTRIBUTE NOW
          </button>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 h-10 md:h-16 flex items-center justify-between">

    {/* DESKTOP MENU */}
    <ul className="hidden md:flex items-center gap-8 font-semibold tracking-wide">
      {navLinks.map((item) => (
        <li key={item.name}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `transition hover:text-yellow-500 ${
                isActive ? "text-yellow-500" : ""
              }`
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>

    {/* SOCIAL */}
    <div className="hidden md:flex items-center gap-4">
      <Social  iconComponent={<FaInstagram />}  href="https://www.instagram.com/ummeedwelfaretrust/" />
      <Social iconComponent={<FaXTwitter />} href="https://x.com/ummeedtrust" />
      <Social iconComponent={<FaFacebookF />} href="https://www.facebook.com/ummeedwelfaretrust/" />
    </div>



    {/* MOBILE TOGGLE */}
    <button onClick={() => setOpen(!open)} className="md:hidden">
      {open ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {/* MOBILE MENU */}
  {open && (
    <div className="md:hidden bg-white shadow-lg">
      <ul className="flex flex-col gap-4 px-6 py-3 font-semibold">
        {navLinks.map((item) => (
          <li key={item.name} className="hover:text-yellow-500 pb-2">
            <NavLink
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block transition hover:text-yellow-500 ${
                  isActive ? "text-yellow-500" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )}
</nav>

    </header>
  );
}

/* SMALL COMPONENTS */

function Info({ icon, title, value }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-yellow-500">{icon}</span>
      <div>
        <p className="text-xs text-gray-400">{title}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

function Social({ iconComponent, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="h-9 w-9 rounded-full border border-yellow-500 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition cursor-pointer">
        {iconComponent}
      </div>
    </a>
  );
}
