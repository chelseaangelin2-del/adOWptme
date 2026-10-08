import { PawPrint, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-orange-50 dark:bg-gray-900 border-t border-orange-200 dark:border-gray-700 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-bold text-lg mb-2">
            <PawPrint size={22} />
            <span>adOWptme</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Compassionate Care for every paw. Find your forever friend today.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 uppercase tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/login", label: "Login" },
              { to: "/register", label: "Register" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 uppercase tracking-wide">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <li>📧 hello@adowptme.org</li>
            <li>📞 +62 812-3456-7890</li>
            <li>📍 Jakarta, Indonesia</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-orange-200 dark:border-gray-700 py-4 text-center text-xs text-gray-400 dark:text-gray-500 flex items-center justify-center gap-1">
        <span>Made with</span>
        <Heart size={12} className="text-red-400" fill="currentColor" />
        <span>by adOWptme Team © 2025</span>
      </div>
    </footer>
  );
}