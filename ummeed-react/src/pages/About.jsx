import member3 from "../assets/images/shekhar-chauhan.webp";
import member1 from "../assets/images/rashmi.webp";
import member2 from "../assets/images/member3.jpeg";
import hands from "../assets/images/hands.jpg";
import impact from "../assets/images/impact.webp";

import founder3 from "../assets/images/founder1.jpeg";
import founder1 from "../assets/images/founder2.webp";
import founder2 from "../assets/images/founder3.jpeg";
export default function About() {
  return (
    <section className="bg-white overflow-x-hidden">

      {/* ABOUT US */}
      <div className="py-16 md:py-20 max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        <img
          src={hands}
          alt="About"
          className="rounded-lg shadow-lg w-full object-cover"
        />

        <div className="text-center md:text-left">
          <p className="text-yellow-500 font-semibold mb-2">ABOUT US</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            We Are In A Mission To Help The Helpless
          </h2>
          <p className="text-gray-600 mb-6">
            Ummeed Welfare Organization believes that every life deserves dignity,
            opportunity, and hope.
          </p>
          <p className="text-gray-600">
            “Ummeed” means hope — and hope is what we strive to spread every day.
          </p>
        </div>
      </div>

      {/* FOUNDERS */}
      <div className="py-16 md:py-28 bg-[#fdfaf5] text-center">
        <p className="text-yellow-500 font-semibold mb-2">OUR FOUNDERS</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-12 md:mb-16">
          Meet the Heart of Ummeed
        </h2>

        <div className="max-w-5xl mx-auto px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-14">
          <TeamCard name="Ashish" role="Founder" image={founder1} />
          <TeamCard name="Namrata Singh" role="Founder" image={founder2} />
          <TeamCard name="Mohd. Saif" role="Founder" image={founder3} />
        </div>
      </div>

      {/* IMPACT */}
      <div
        className="relative py-16 md:py-28 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${impact})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <p className="text-yellow-500 font-semibold mb-3">OUR IMPACT</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              You Have The Power Today <br className="hidden md:block" />
              To Change Tomorrow
            </h2>
            <p className="text-gray-200 mb-8">
              With your love and contribution, we have already touched thousands
              of lives.
            </p>

            <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto md:mx-0">
              <ImpactStat label="Children Saved" value="100+" />
              <ImpactStat label="Campaigns Running" value="50+" />
            </div>
          </div>

          <div className="bg-yellow-500 p-6 md:p-8 text-black font-semibold text-center md:text-left mx-auto md:mx-0 max-w-sm">
            “Give a hand to make the better world”
          </div>
        </div>
      </div>

      {/* BECOME A MEMBER */}
      <div className="py-16 md:py-28 bg-[#fdfaf5]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* FORM */}
          <form className="bg-white shadow-xl rounded-xl p-6 md:p-10 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="input" placeholder="Your Name" />
              <input className="input" placeholder="Phone Number" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="input" placeholder="Your Email" />
              <input className="input" placeholder="Your Address" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="input" placeholder="Date of Birth" />
              <input className="input" placeholder="Nationality" />
            </div>

            <textarea className="input h-28" placeholder="Your Message"></textarea>

            <button className="bg-yellow-500 hover:bg-yellow-600 w-full py-3 font-semibold transition">
              SUBMIT NOW
            </button>
          </form>

          {/* INFO */}
          <div className="text-center md:text-left">
            <p className="text-yellow-500 font-semibold mb-2">REQUIREMENTS</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Become A Member
            </h2>
            <p className="text-gray-600 mb-8">
              Join Ummeed Welfare Organization and become part of a growing family
              working for education, healthcare, and hunger relief.
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li>✔ Support people in extreme need</li>
              <li>✔ Make the world a better place</li>
              <li>✔ Share your love for community</li>
            </ul>

            <p className="text-gray-600 text-sm">
              Apply online → Get connected → Start contributing → See the impact
            </p>
          </div>
        </div>
      </div>

      {/* MEMBERS */}
      <div className="py-16 md:py-28 max-w-7xl mx-auto px-4 md:px-6 text-center">
        <p className="text-yellow-500 font-semibold tracking-widest text-sm mb-2">
          OUR MEMBERS
        </p>
        <h1 className="text-2xl md:text-4xl font-bold mb-6">
          Meet The Hands That Build Hope
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto mb-12 md:mb-16">
          Our members are the true heroes behind every act of kindness.
        </p>

        <div className="max-w-5xl mx-auto px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-14">
          <TeamCard name="Miss Rashmi" role="Member" image={member1} />
          <TeamCard name="Shivani Upadhyay" role="Member" image={member2} />
          <TeamCard name="Shekhar Chauhan" role="Member" image={member3} />
        </div>
      </div>

    </section>
  );
}

function TeamCard({ name, role, image }) {
  return (
    <div className="group text-center">
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={name}
          className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
        />
      </div>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}

function ImpactStat({ value, label }) {
  return (
    <div>
      <h3 className="text-3xl font-bold text-yellow-400">{value}</h3>
      <p className="text-gray-200">{label}</p>
    </div>
  );
}