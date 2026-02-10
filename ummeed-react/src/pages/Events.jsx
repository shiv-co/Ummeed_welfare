import event1 from "../assets/images/7.webp";
import event2 from "../assets/images/8.webp";
import event3 from "../assets/images/9.webp";
import event4 from "../assets/images/5.webp";
import event5 from "../assets/images/4.webp";
import event6 from "../assets/images/water_dist.webp";

export default function Events() {
  const events = [
    {
      title: "Free School Kit Distribution Drive",
      desc:
        "A day dedicated to children and their dreams. Join us as we distribute free school bags, stationery, and books to underprivileged children.",
      date: "13",
      month: "March",
      location: "Lucknow, Uttar Pradesh",
      time: "10:00 AM – 7:00 PM",
      image: event1,
    //   featured: true,
    },
    {
      title: "Health & Wellness Camp",
      desc:
        "Free health check-ups, medicines, and awareness sessions for families who cannot afford basic healthcare.",
      date: "30",
      month: "March",
      location: "Barabanki, Uttar Pradesh",
      time: "10:00 AM – 7:00 PM",
      image: event2,
    },
    {
      title: "Women Empowerment & Skill Training Workshop",
      desc:
        "Empowering women through vocational training, financial literacy, and skill-building sessions.",
      date: "15",
      month: "August",
      location: "Kanpur, Uttar Pradesh",
      time: "10:00 AM – 7:00 PM",
      image: event3,
    },
    {
      title: "Disaster Relief Support Camp",
      desc:
        "Providing food, shelter, clothing, and emergency supplies during natural calamities.",
      date: "21",
      month: "September",
      location: "Gorakhpur, Uttar Pradesh",
      time: "10:00 AM – 7:00 PM",
      image: event4,
    },
    {
      title: "Community Food Distribution Drive",
      desc:
        "A small act of kindness can fill many hearts. Join us to distribute meals to families in need.",
      date: "10",
      month: "October",
      location: "Sitapur, Uttar Pradesh",
      time: "10:00 AM – 7:00 PM",
      image: event5,
    },
    {
      title: "Clean Water Awareness Campaign",
      desc:
        "Spreading awareness about safe drinking water and installing basic filtration solutions in villages.",
      date: "5",
      month: "November",
      location: "Hardoi, Uttar Pradesh",
      time: "10:00 AM – 7:00 PM",
      image: event6,
    },
  ];

  return (
    <section className="md:py-10 py-5 bg-white">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-20 px-6">
        <p className="text-yellow-500 font-semibold tracking-widest text-sm">
          LIST OF EVENTS
        </p>
        <h1 className="text-4xl font-bold mt-3">Upcoming Events</h1>
        <p className="text-gray-600 mt-6 leading-relaxed">
          Join Hands. Spread Smiles. Be the Change.
          <br />
          At Ummeed Welfare Organization, every event is a step toward a brighter,
          more compassionate India.
        </p>
      </div>

      {/* EVENTS GRID */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 md:grid-cols-2 gap-12">

        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}

      </div>

      {/* MISSION SECTION */}
      <div className="mt-32 bg-[#fdfaf5] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-yellow-500 font-semibold mb-3">OUR MISSION</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Make The World Happier, One Act At A Time
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-14">
            Every initiative at Ummeed Welfare Organization is guided by a simple belief
            — <em>“Hope can heal the world.”</em> We focus on improving lives through
            education, healthcare, empowerment, and compassion.
          </p>

          <div className="grid md:grid-cols-4 gap-10">
            <MissionItem title="Clean Water" desc="Ensuring access to safe drinking water." />
            <MissionItem title="Healthy Food" desc="Feeding families through food drives." />
            <MissionItem title="Medical Help" desc="Free healthcare camps & medicines." />
            <MissionItem title="Proper Education" desc="Supporting children’s education." />
          </div>

        </div>
      </div>

    </section>
  );
}

/* 🔸 EVENT CARD */

function EventCard({
  title,
  desc,
  date,
  month,
  location,
  time,
  image,
  featured,
}) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group
      ${featured ? "lg:col-span-2 lg:flex" : ""}`}
    >
      {/* IMAGE */}
      <div className={`${featured ? "lg:w-full" : ""} overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      {/* CONTENT */}
      <div className="p-7 flex flex-col justify-between">
        <div>
          {/* DATE BADGE */}
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-yellow-500 text-black text-center px-4 py-2 font-bold">
              <p className="text-lg leading-none">{date}</p>
              <p className="text-xs uppercase">{month}</p>
            </div>
            <div className="text-xs text-gray-600 space-y-1">
              <p>📍 {location}</p>
              <p>⏰ {time}</p>
            </div>
          </div>

          <h3 className="font-bold text-lg mb-3">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{desc}</p>
        </div>

        <button className="text-sm font-semibold text-yellow-500 hover:text-yellow-600 transition">
          VIEW DETAILS →
        </button>
      </div>
    </div>
  );
}

/* 🔸 MISSION ITEM */

function MissionItem({ title, desc }) {
  return (
    <div className="group">
      <div className="mx-auto mb-4 h-14 w-14 bg-yellow-500 flex items-center justify-center rounded transition group-hover:scale-110">
        ⭐
      </div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
