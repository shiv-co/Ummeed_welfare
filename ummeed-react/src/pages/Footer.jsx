export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 pt-20">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-12">

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-yellow-500 font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {["Home", "About Us", "Causes", "Events", "Contact"].map(
              (item) => (
                <li key={item} className="hover:text-yellow-500 transition">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* OTHER PAGES */}
        <div>
          <h3 className="text-yellow-500 font-semibold mb-6">Other Pages</h3>
          <ul className="space-y-3">
            {["Privacy Policy", "Term Of Service", "Disclaimer", "FAQ"].map(
              (item) => (
                <li key={item} className="hover:text-yellow-500 transition">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-yellow-500 font-semibold mb-6">Contact Info</h3>

          <div className="space-y-5">
            <p>📍 Lucknow, Uttar Pradesh, India Pin 226001</p>
            <hr className="border-gray-600" />
            <p>📞 +91 8127239729</p>
            <hr className="border-gray-600" />
            <p>✉️ ummeedwelfare.org.in@gmail.com</p>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-yellow-500 font-semibold mb-6">Newsletter</h3>
          <p className="mb-6">
            Be part of our mission. Get regular updates on our activities and impact.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-4 py-3 outline-none text-black"
            />
            <button className="bg-yellow-500 px-6 font-semibold text-black hover:bg-yellow-600 transition">
              SEND
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 mt-16 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm text-gray-400 gap-4">
          <p>Developed By TP India Network</p>
          <p>Copyright © 2025. All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
}
