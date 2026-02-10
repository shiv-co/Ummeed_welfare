import { useState } from "react";

import g1 from "../assets/gallery/g1.jpeg";
import g2 from "../assets/gallery/g2.jpeg";
import g3 from "../assets/gallery/g3.jpeg";
import g4 from "../assets/gallery/g4.jpeg";
import g5 from "../assets/gallery/g5.jpeg";
import g6 from "../assets/gallery/g6.jpeg";
import g7 from "../assets/gallery/g7.jpeg";
import g8 from "../assets/gallery/g8.jpeg";
import g9 from "../assets/gallery/g9.jpeg";
import g10 from "../assets/gallery/g10.jpeg";
import g11 from "../assets/gallery/g11.jpeg";
import g12 from "../assets/gallery/g12.jpeg";
import g13 from "../assets/gallery/g13.jpeg";
import g14 from "../assets/gallery/g14.webp";
import g15 from "../assets/gallery/g15.jpeg";
import g16 from "../assets/gallery/g16.jpeg";
import g17 from "../assets/gallery/g17.jpeg";
import g18 from "../assets/gallery/g18.jpeg";
import g19 from "../assets/gallery/g19.jpeg";
import g20 from "../assets/gallery/g20.jpeg";
import g21 from "../assets/gallery/g21.webp";
import g22 from "../assets/gallery/g22.webp";
import g23 from "../assets/gallery/g23.webp";
import g24 from "../assets/gallery/g24.webp";
import g25 from "../assets/gallery/g25.webp";
import g26 from "../assets/gallery/g26.webp";
import g27 from "../assets/gallery/g27.webp";
import g28 from "../assets/gallery/g28.webp";
import g29 from "../assets/gallery/g29.webp";
import g30 from "../assets/gallery/g30.webp";
import g31 from "../assets/gallery/g31.webp";
import g32 from "../assets/gallery/g32.webp";
import g33 from "../assets/gallery/g33.webp";
import g34 from "../assets/gallery/g34.webp";
import g35 from "../assets/gallery/g35.webp";
import g36 from "../assets/gallery/g36.webp";
import g37 from "../assets/gallery/g37.webp";
import g38 from "../assets/gallery/g38.webp";
import g39 from "../assets/gallery/g39.webp";
// import g40 from "../assets/gallery/g40.webp";



const images = [
  {
    id: 1,
    src: g1,
    caption: "Education drive at Lucknow",
  },
  {
    id: 2,
    src: g2,
    caption: "Moments of Hope & Humanity",
  },
  {
    id: 3,
    src: g3,
    caption: "Moments of Hope & Humanity",
  },
  {
    id: 4,
    src: g4,
    caption: "Moments of Hope & Humanity",
  },
  {
    id: 5,
    src: g5,
    caption: "Smiles that give us hope",
  },
  {
    id: 6,
    src: g6,
    caption: "Smiles that give us hope",
  },
    {   
    id: 7,
    src: g7,
    caption: "Moments of Hope & Humanity",
  },
  {
    id: 8,
    src: g8,
    caption: "Moments of Hope & Humanity",
  },
  {
    id: 9,
    src: g9,
    caption: "Smiles that give us hope",
  },
  {
    id: 10,
    src: g10,
    caption: "Smiles that give us hope",
  },
  {
    id: 11,
    src: g11,
    caption: "Moments of Hope & Humanity",
  },
  {
    id: 12,
    src: g12,
    caption: "Moments of Hope & Humanity",
  },
  {
    id: 13,
    src: g13,
    caption: "Smiles that give us hope",
  },
  {
    id: 14,
    src: g14,
    caption: "Smiles that give us hope",
  },
  {
    id: 15,
    src: g15,
    caption: "Moments of Hope & Humanity",
  },
  {
    id: 16,
    src: g16,
    caption: "Moments of Hope & Humanity",
  },
  {
    id: 17,
    src: g17,
    caption: "Smiles that give us hope",
  },
  {
    id: 18,
    src: g18,
    caption: "Smiles that give us hope",
  },
  {
    id: 19,
    src: g19,
    caption: "Moments of Hope & Humanity",
  },
  {
    id: 20,
    src: g20,
    caption: "Moments of Hope & Humanity",
  },
  {
    id: 21,
    src: g21,
    caption: "Smiles that give us hope",    

  },
  {
    id: 22,
    src: g22,
    caption: "Smiles that give us hope",    

  },
  {
    id: 23,
    src: g23,
    caption: "Moments of Hope & Humanity",
  },
  {
    id: 24,
    src: g24,
    caption: "Moments of Hope & Humanity",
  },
  {
    id: 25,
    src: g25,
    caption: "Smiles that give us hope",    

  },
  {
    id: 26,
    src: g26,
    caption: "Smiles that give us hope",    

  },
  {
    id: 27,
    src: g27,
    caption: "Moments of Hope & Humanity",
  },
  {
    id: 28,
    src: g28,
    caption: "Moments of Hope & Humanity",
  },
  {
    id: 29,
    src: g29,
    caption: "Smiles that give us hope",    

  },
  {
    id: 30,
    src: g30,
    caption: "Smiles that give us hope",    

  },
  {
    id: 31,
    src: g31,
    caption: "Moments of Hope & Humanity",
  },
  {
    id: 32,
    src: g32,
    caption: "Moments of Hope & Humanity",
  },
  {
    id: 33,
    src: g33,
    caption: "Smiles that give us hope",    

  },
   {
     id :34, 
     src :g34, 
     caption : "Smiles that give us hope"
   }, 
   {
     id :35, 
     src :g35, 
     caption : "Moments of Hope & Humanity"
   }, 
   {
     id :36, 
     src :g36, 
     caption : "Moments of Hope & Humanity"
   },  
   {
        id :37, 
        src :g37,
        caption : "Smiles that give us hope"
   },
   {
        id :38, 
        src :g38,
        caption : "Smiles that give us hope"
   },
   {
        id :39, 
        src :g39,
        caption : "Moments of Hope & Humanity"
   },
//    {
//         id :40, 
//         src :g40,
//         caption : "Moments of Hope & Humanity"
//    }




];


/* TEMP IMAGES – replace later */


export default function Gallery() {
  return (
    <section className="bg-white overflow-x-hidden">

      {/* HEADER */}
      <div className="md:pt-20 pt-5 pb-5 md:pb-16 text-center max-w-3xl mx-auto px-4">
        <p className="text-yellow-500 font-semibold tracking-widest text-sm">
          OUR GALLERY
        </p>
        <h1 className="text-2xl md:text-5xl font-bold  mt-1 md:mt-3">
          Moments of Hope & Humanity
        </h1>
        <p className="text-gray-600 md:mt-6 mt-3 leading-relaxed text-sm md:text-base">
          Every picture tells a story — of kindness, courage, and compassion.
          These moments remind us why we do what we do.
        </p>
      </div>

      {/* CREATIVE MASONRY GRID */}
      <div className="max-w-7xl mx-auto px-2 md:px-6 columns-2 sm:columns-3 lg:columns-4 gap-3 md:gap-6 md:space-y-6 space-y-4">
        {images.map((img) => (
          <GalleryCard key={img.id} img={img} />
        ))}
      </div>

      {/* CTA */}
      <div className="py-24 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Become a Proud Volunteer Today
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Your time, compassion, and effort can help a child go to school,
          bring food to an empty plate, and restore dignity to those in need.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 px-8 py-3 font-semibold transition hover:scale-105">
          JOIN NOW
        </button>
      </div>

      {/* FAQ SECTION */}
      <FAQSection />

    </section>
  );
}

/* 🔹 GALLERY CARD */

function GalleryCard({ img }) {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg break-inside-avoid">
      <img
        src={img.src}
        alt="images of NGO activities"
        
        loading="lazy"
        className="w-full object-cover transition duration-700 group-hover:scale-110 group-hover:blur-[1px]"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition duration-500 flex items-center justify-center">
        <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition delay-200 px-4 text-center">
          {img.caption}
        </p>
      </div>
    </div>
  );
}

/* 🔹 FAQ SECTION */

function FAQSection() {
  const faqs = [
    {
      q: "What is the process to be a part of Ummeed Welfare Organization?",
      a: "You can apply online through our volunteer or member form. Our team will reach out for orientation and onboarding.",
    },
    {
      q: "What should I know before applying?",
      a: "You only need a compassionate heart and willingness to help. No prior experience is mandatory.",
    },
    {
      q: "What is the minimum age to volunteer?",
      a: "The minimum age is generally 16 years. Younger volunteers can join with parental consent.",
    },
    {
      q: "Can I volunteer with friends or family?",
      a: "Absolutely! Group volunteering is encouraged and helps us create a greater impact together.",
    },
  ];

  return (
    <div className="bg-[#fdfaf5] py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-14 items-start">

        {/* FAQ LEFT */}
        <div>
          <p className="text-yellow-500 font-semibold mb-2">FAQ</p>
          <h2 className="text-3xl font-bold mb-6">General Questions</h2>
          <p className="text-gray-600 mb-10">
            Have questions about joining or supporting Ummeed Welfare Organization?
            Here are some common things people ask.
          </p>

          <Accordion items={faqs} />
        </div>

        {/* SUPPORT CARD */}
        <div className="bg-white shadow-xl rounded-xl p-10">
          <h3 className="text-xl font-semibold mb-4">Extended Support</h3>
          <p className="text-gray-600 mb-6">
            If you have more questions or want to collaborate on long-term
            initiatives, we’re here to help.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>📧 ummeedwelfare.org.in@gmail.com</p>
            <p>📞 +91 8127239729</p>
          </div>
        </div>

      </div>
    </div>
  );
}

/* 🔹 ACCORDION */

function Accordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center px-6 py-4 font-semibold text-left"
          >
            {item.q}
            <span className="text-yellow-500 text-xl">
              {open === i ? "−" : "+"}
            </span>
          </button>

          <div
            className={`px-6 overflow-hidden transition-all duration-500 ${
              open === i ? "max-h-40 pb-4" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 text-sm">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
