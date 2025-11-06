import React from "react";
import footerlogo from "@/assets/icons/footerlogo.png"; // Assuming you have a logo image
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

  const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "HOST", path: "/host" },
  { name: "ARTIST", path: "/artist" },
  { name: "USER", path: "/user" },
  { name: "CONTACT US", path: "/contact" },
];

  return (
    <footer className="bg-black border-t border-purple-900/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              <img src={footerlogo} alt="" />
            </div>
            <p className="text-gray-400 text-sm">
              Revolutionize your entertainment experience with the ultimate
              platform for events, artists, and unforgettable nights.
            </p>
          </div>
       <div>
  <h3 className="text-white font-semibold mb-4">Quick Links</h3>
  <ul className="space-y-2">
    {navItems.map((item) => (
      <li key={item.name}>
        <Link
          to={item.path}
          className="text-gray-400 hover:text-purple-400 transition-colors"
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 info@scenezone.com</li>
              <li>📞 +91 9654551209</li>
              <li>📍 India Main Office</li>
              <li>🌐 www.scenezone.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/19SB4RBrHh/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://x.com/thescenezone?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://www.instagram.com/scenezone.in?igsh=MTFteDY2c2s2a3d2Mw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://youtube.com/@scenezoneofficial?si=G2avLgFSlmmdKyTw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-900/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © Copyright 2025, Gigvala Technologies LLP | All Rights Reserved
          </p>

          {/* Inside Footer */}
        
<p className="text-gray-400 text-sm">
  <Link
    to="/terms"
    onClick={() => window.scrollTo(0, 0)}
    className="hover:text-purple-400 transition-colors"
  >
    Terms & Conditions
  </Link>{" "}
  |{" "}
  <Link
    to="/privacy"
    onClick={() => window.scrollTo(0, 0)}
    className="hover:text-purple-400 transition-colors"
  >
    Privacy Policy
  </Link>{" "}
  |{" "}
  <Link
    to="/contact"
    onClick={() => window.scrollTo(0, 0)}
    className="hover:text-purple-400 transition-colors"
  >
    Contact Us
  </Link>
</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
