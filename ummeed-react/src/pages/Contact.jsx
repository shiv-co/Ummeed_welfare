import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-white overflow-x-hidden">

      {/* HEADER */}
      <div className="py-20 max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-yellow-500 font-semibold tracking-widest mb-2">
            CONTACT US
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h1>

          <p className="text-gray-600 leading-relaxed mb-10">
            We’d love to hear from you! Whether you wish to volunteer, donate,
            collaborate, or simply learn more about our work, your message
            means a lot to us.  
            <br /><br />
            Together, we can bring hope to those who need it most.
          </p>

          {/* LOCATION */}
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg mb-2">Lucknow</h3>
              <p className="flex items-start gap-3">
                <span className="text-yellow-500">📍</span>
                Lucknow, Uttar Pradesh, India Pin 226001
              </p>
            </div>

            <p className="flex items-center gap-3">
              <span className="text-yellow-500">📞</span>
              +91 8127239729
            </p>

            <p className="flex items-center gap-3">
              <span className="text-yellow-500">✉️</span>
              ummeedwelfare.org.in@gmail.com
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-[#fdfaf5] rounded-xl shadow-lg p-6 md:p-10">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-xl font-semibold mb-4">
                Send Us A Message
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="input" placeholder="Your Name" required />
                <input className="input" placeholder="Phone Number" />
              </div>

              <input className="input" placeholder="Your Email" required />

              <select className="input">
                <option>Reason for Contact</option>
                <option>Volunteer</option>
                <option>Donation</option>
                <option>Collaboration</option>
                <option>General Inquiry</option>
              </select>

              <textarea
                className="input h-32"
                placeholder="Your Message"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 w-full py-3 font-semibold transition hover:scale-[1.02]"
              >
                SEND MESSAGE
              </button>
            </form>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                Thank You!
              </h3>
              <p className="text-gray-600">
                Your message has been received. Our team will get back to you
                shortly.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* WHY CONTACT US */}
      <div className="bg-[#fdfaf5] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="text-yellow-500 font-semibold mb-2">
            WHY REACH OUT
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mb-14">
            How Can We Help You?
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            <ContactCard
              title="Volunteer With Us"
              desc="Join our mission and help make a real difference on the ground."
              icon="🤝"
            />
            <ContactCard
              title="Donate"
              desc="Support education, healthcare, and hunger relief initiatives."
              icon="💛"
            />
            <ContactCard
              title="Collaborate"
              desc="Partner with us for social impact projects and campaigns."
              icon="🌱"
            />
            <ContactCard
              title="Ask Anything"
              desc="Have a question? We’re always happy to help."
              icon="💬"
            />
          </div>
        </div>
      </div>

      {/* MAP PLACEHOLDER */}
      {/* <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-gray-200 h-[300px] rounded-xl flex items-center justify-center text-gray-600">
            Google Map Integration (Optional)
          </div>
        </div>
      </div> */}

    </section>
  );
}

/* SMALL CARD */

function ContactCard({ title, desc, icon }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
