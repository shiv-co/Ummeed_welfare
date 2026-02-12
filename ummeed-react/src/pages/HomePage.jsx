
import bg_img from "../assets/images/home.webp"; 
import about_img from "../assets/images/about.webp";
import causes2 from "../assets/images/2.jpeg";
import causes1 from "../assets/images/3.jpg";
import causes3 from "../assets/images/4.webp";
import causes4 from "../assets/images/3.jpg";
import impact from "../assets/images/impact.webp";

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO SECTION */}
      <section
        className="relative min-h-[90vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('${bg_img}')` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fadeIn">
            NGO in Lucknow Helping <br />
            Communities Through <span className="text-yellow-400">Education & Healthcare</span>
          </h1>

          <p className="text-gray-200 max-w-3xl mx-auto mb-8">
            At Ummeed Welfare Organization, we work tirelessly to educate children,
            empower women, provide healthcare, and ensure no one sleeps hungry.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105">
              Contribute Now
            </button>
            <button className="border border-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300">
              ▶ Watch Video
            </button>
          </div>
        </div>
      </section>

      {/* ACTION CARDS */}
      <section className="bg-[#f7f7f7] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 -mt-32 relative z-20">
          
          <ActionCard
            title="Become a Volunteer"
            text="Join our growing family of changemakers and help us bring hope."
          />

          <ActionCard
            title="Quick Fundraising"
            text="Start a small initiative together, we can make a big difference."
          />

          <ActionCard
            title="Make Donation"
            text="Your contribution directly supports education & healthcare."
            highlight
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <img
            src={about_img}
            alt="About NGO"
            className="rounded-lg shadow-lg hover:scale-105 transition duration-500"
          />

          <div>
            <p className="text-yellow-500 font-semibold mb-2">ABOUT US</p>
            <h2 className="text-3xl font-bold mb-6">
              We Are On A Mission To Help The Helpless
            </h2>

            <p className="text-gray-600 mb-6">
              Ummeed Welfare Organization (UWO) is a non-profit initiative based in
              Lucknow, Uttar Pradesh, dedicated to building a better and more compassionate India.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Support people in extreme need</li>
              <li>✔ Access to education & healthcare</li>
              <li>✔ Equality, dignity & hope</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="bg-[#f7f7f7] py-24">
  {/* TITLE */}
  <div className="text-center mb-16">
    <p className="text-yellow-500 font-semibold tracking-widest text-sm">
      OUR CAUSES
    </p>
    <h2 className="text-4xl font-bold mt-2">Donate Us Now</h2>
    <p className="text-gray-500 mt-3 italic">
      Together we rise — with hope, for hope.
    </p>
  </div>

  <div className="max-w-6xl mx-auto px-6 space-y-14">

    {/* BIG FEATURED CAUSE */}
    <BigCauseCard
      title="Healthcare For All"
      desc="From medical check-ups to medicine distribution, we reach out to those who cannot afford basic healthcare."
      raised={68000}
      goal={180000}
      image={causes1}
    />

    {/* SMALL CAUSES */}
    <div className="grid md:grid-cols-3 gap-8">
      <SmallCauseCard
        title="Women Empowerment"
        desc="We help women gain confidence and independence through vocational training, education, and self-help groups."
        raised={54000}
        goal={100000}
        image={causes2}
      />
      <SmallCauseCard
        title="Food For The Hungry"
        desc="Our food distribution drives ensure that no one in our community goes to bed hungry."
        raised={32000}
        goal={50000}
        image={causes3}
      />
      <SmallCauseCard
        title="Disaster Relief & Emergency Support"
        desc="In times of crisis, we provide immediate relief and long-term support to affected communities."
        raised={20000}
        goal={55000}
        image={causes4}
      />
    </div>

  </div>
</section>


      {/* IMPACT */}
      <section
        className="relative py-28 bg-cover bg-center text-white"
        style={{ backgroundImage: `url('${impact}')` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">
            You Have The Power Today To Change Tomorrow
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <Stat number="100+" label="Children Saved" />
            <Stat number="50+" label="Campaigns Running" />
            <Stat number="10+" label="Total Country" />
          </div>
        </div>
      </section>

      {/* DONATION FORM */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <form className="bg-white shadow-xl rounded-lg p-8 space-y-4">
            <input className="input" placeholder="Your Name" />
            <input className="input" placeholder="Your Email" />
            <input className="input" placeholder="Amount" />
            <textarea className="input h-28" placeholder="Your Message"></textarea>
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 py-3 rounded-md font-semibold transition">
              Donate Now
            </button>
          </form>

          <div>
            <p className="text-yellow-500 font-semibold mb-2">HELP US</p>
            <h2 className="text-3xl font-bold mb-4">
              Your Donation Can Change Someone’s Life
            </h2>
            <p className="text-gray-600">
              No amount is small when it’s given from the heart.
            </p>
          </div>
        </div>
      </section>

      {/* VOLUNTEER CTA */}
      <section
        className="relative py-28 bg-cover bg-center text-white text-center"
        style={{ backgroundImage: "url('/images/volunteer.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Become A Proud Volunteer Now</h2>
          <p className="mb-8">Be a part of something greater than yourself.</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-md font-semibold transition-all hover:scale-105">
            Join Now
          </button>
        </div>
      </section>

    </div>
  );
}

/* REUSABLE COMPONENTS */

function ActionCard({ title, text, highlight }) {
  return (
    <div
      className={`p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:-translate-y-2
      ${highlight ? "bg-yellow-500 text-black" : "bg-white"}`}
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="mb-6">{text}</p>
      <button className="font-semibold underline">Join Now</button>
    </div>
  );
}

function BigCauseCard({ title, desc, raised, goal, image }) {
  const percent = Math.min((raised / goal) * 100, 100);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">

      <img src={image} alt={title} className="w-full h-[320px] object-cover" />

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6 max-w-3xl">{desc}</p>

        {/* PROGRESS BAR */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-4 overflow-hidden">
          <div
            className="h-full bg-yellow-500 transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* RAISED / GOAL */}
        <div className="flex justify-between text-sm font-semibold text-gray-700 mb-6">
          <span>₹{raised.toLocaleString()} Raised</span>
          <span>₹{goal.toLocaleString()} Goal</span>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 text-sm font-semibold transition">
            DONATE
          </button>
          <button className="text-gray-700 hover:text-yellow-500 text-sm font-semibold transition">
            DETAILS →
          </button>
        </div>
      </div>
    </div>
  );
}
function SmallCauseCard({ title, raised, goal, image, desc }) {
  const percent = Math.min((raised / goal) * 100, 100);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-6">
        <h3 className="font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 max-w-3xl">{desc}</p>

        {/* PROGRESS BAR */}
        <div className="w-full h-1.5 bg-gray-200 rounded-full mb-3">
          <div
            className="h-full bg-yellow-500"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* RAISED / GOAL */}
        <div className="flex justify-between text-xs text-gray-600 mb-5">
          <span>₹{raised.toLocaleString()} Raised</span>
          <span>₹{goal.toLocaleString()} Goal</span>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3">
          <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 py-2 text-xs font-semibold transition">
            DONATE
          </button>
          <button className="flex-1 border border-gray-300 hover:border-yellow-500 hover:text-yellow-500 py-2 text-xs font-semibold transition">
            DETAILS
          </button>
        </div>
      </div>
    </div>
  );
}


function Stat({ number, label }) {
  return (
    <div>
      <h3 className="text-4xl font-bold text-yellow-400">{number}</h3>
      <p className="mt-2">{label}</p>
    </div>
  );
}
