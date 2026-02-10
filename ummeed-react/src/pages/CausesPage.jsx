import healthcare from "../assets/images/4.webp";
import education from "../assets/images/3.jpg";
import food from "../assets/images/6.webp";
import women from "../assets/images/2.jpeg";
import disaster from "../assets/images/impact.webp";
import water from "../assets/images/5.webp";

export default function Causes() {
  const causes = [
    {
      title: "Healthcare For All",
      desc:
        "Access to basic healthcare remains a distant dream for many families in rural India. We organize free medical camps, medicine distribution, and health awareness drives.",
      image: healthcare,
      raised: 525000,
      goal: 750000,
    },
    {
      title: "Education For Every Child",
      desc:
        "A book, a teacher, and a safe classroom — that’s all it takes to change a child’s life. We support education, tuition, and mentorship for underprivileged children.",
      image: education,
      raised: 600000,
      goal: 770000,
    },
    {
      title: "People That Needs Food",
      desc:
        "No one should sleep hungry. Our volunteers regularly conduct food drives and community kitchen initiatives for the needy.",
      image: food,
      raised: 485000,
      goal: 500000,
    },
    {
      title: "Women Empowerment",
      desc:
        "Through vocational training, awareness programs, and small business support, we help women gain independence and dignity.",
      image: women,
      raised: 375000,
      goal: 500000,
    },
    {
      title: "Disaster Relief & Emergency",
      desc:
        "When disasters strike, Ummeed Welfare is among the first responders — providing food, clothing, shelter, and rehabilitation.",
      image: disaster,
      raised: 400000,
      goal: 510000,
    },
    {
      title: "Clean Water Initiative",
      desc:
        "Clean drinking water is a right. We install handpumps, water filters, and awareness programs in water-scarce villages.",
      image: water,
      raised: 420000,
      goal: 510000,
    },
  ];

  return (
    <section className="py-28 bg-white">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-20 px-6">
        <p className="text-yellow-500 font-semibold tracking-widest text-sm">
          OUR CAUSES
        </p>
        <h1 className="text-4xl font-bold mt-3">Give Us Now</h1>
        <p className="text-gray-600 mt-6 leading-relaxed">
          Every day, millions of people across India face challenges that can be
          solved with a little help and a lot of heart.
          <br />
          At Ummeed Welfare Organization, we work to create opportunities not just
          for survival, but for a better life.
        </p>
      </div>

      {/* CAUSES GRID */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 md:grid-cols-2 gap-12">
        {causes.map((cause, index) => (
          <CauseCard key={index} {...cause} />
        ))}
      </div>

      {/* DONATION FORM SECTION */}
      <div className="bg-[#fdfaf5] mt-32 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          {/* FORM */}
          <form className="bg-white shadow-xl rounded-xl p-10 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <input className="input" placeholder="Your Name" />
              <input className="input" placeholder="Phone Number" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input className="input" placeholder="Your Email" />
              <input className="input" placeholder="Amount: ₹" />
            </div>
            <select className="input">
              <option>Donation To</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Food</option>
            </select>
            <textarea className="input h-28" placeholder="Your Message"></textarea>

            <button className="bg-yellow-500 hover:bg-yellow-600 w-full py-3 font-semibold transition-all hover:scale-[1.02]">
              DONATE NOW
            </button>
          </form>

          {/* INFO */}
          <div>
            <p className="text-yellow-500 font-semibold mb-2">HELP US</p>
            <h2 className="text-3xl font-bold mb-6">
              Your Contributions Can Change Someone’s Life
            </h2>
            <p className="text-gray-600 mb-8">
              A small contribution from you can bring smiles to families
              struggling for basic needs. Every rupee donated goes directly
              toward education, healthcare, and food for those who need it most.
            </p>

            <div className="space-y-4 text-gray-700">
              <p>📍 Lucknow, Uttar Pradesh, India Pin 226001</p>
              <p>📞 +91 8127239729</p>
              <p>✉️ ummeedwelfare.org.in@gmail.com</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

/* 🔸 CAUSE CARD */

function CauseCard({ title, desc, image, raised, goal }) {
  const percent = Math.min((raised / goal) * 100, 100);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 group overflow-hidden">

      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      {/* CONTENT */}
      <div className="p-7">
        <h3 className="font-bold text-lg mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {desc}
        </p>

        {/* PROGRESS */}
        <div className="w-full h-1.5 bg-gray-200 rounded-full mb-3 overflow-hidden">
          <div
            className="h-full bg-yellow-500 transition-all duration-700"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* AMOUNT */}
        <div className="flex justify-between text-xs font-semibold text-gray-700 mb-6">
          <span>₹{raised.toLocaleString()} Raised</span>
          <span>₹{goal.toLocaleString()} Goal</span>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3">
          <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 py-2 text-xs font-semibold transition">
            DONATE
          </button>
          <button className="flex-1 border border-gray-300 hover:border-yellow-500 hover:text-yellow-500 py-2 text-xs font-semibold transition">
            DETAILS →
          </button>
        </div>
      </div>
    </div>
  );
}
